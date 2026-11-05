/* ============================================================
   app.js —— 渲染、交互与动效
============================================================ */
'use strict';

/* ---------- 工具 ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad2 = n => String(n).padStart(2, '0');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- 选项芯片（渲染共用） ---------- */
function chipsHTML() {
  return OPT_GROUPS.map(g =>
    `<div class="opt-grp"><span>${g.label}</span>` +
    g.opts.map(o => {
      const on = g.multi ? OPTS[g.key].has(o) : OPTS[g.key] === o;
      return `<button class="chip${on ? ' on' : ''}" data-opt="${g.key}" data-val="${esc(o)}">${o}</button>`;
    }).join('') + '</div>'
  ).join('');
}

/* ---------- 卡片模板 ---------- */
function cardHTML(it, id) {
  return `
  <article class="card glass${it.wide ? ' wide' : ''}">
    <div class="stage${it.st ? ' ' + it.st : ''}">${it.h}</div>
    <div class="card-body">
      <div class="card-row"><h3>${it.n}</h3><span class="card-en">${it.en || ''}</span><span class="card-id">${id}</span></div>
      <p>${it.d}</p>
      <div class="card-acts">
        <button class="pbtn imx-btn" data-imx aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 3H3v6M15 21h6v-6M21 9V3h-6M3 15v6h6"/></svg>
          沉浸演示
        </button>
        <button class="pbtn" data-toggle aria-expanded="false">AI 提示词
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        ${it.k ? `<span class="k">${esc(it.k)}</span>` : ''}
      </div>
    </div>
    <div class="drawer">
      <div class="drawer-in">
        <div class="opts">${chipsHTML()}</div>
        <pre class="prompt-pre" data-built="0"></pre>
        <button class="copy-btn" data-copy>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          复制提示词
        </button>
      </div>
    </div>
  </article>`;
}

/* ---------- 整页渲染 ---------- */
const app = $('#app');
const sideNav = $('#sideNav');
const order = [];

function render() {
  let html = '';
  DATA.forEach((cat, ci) => {
    const no = pad2(ci + 1);
    html += `<section class="sec" id="sec-${cat.id}">
      <div class="sec-head">
        <span class="sec-no">${no}</span>
        <h2>${cat.name}</h2>
        <span class="sec-en">${cat.en}</span>
        <span class="sec-n">${cat.items.length} 个组件</span>
      </div>
      <div class="grid">`;
    cat.items.forEach((it, ii) => {
      order.push(it);
      html += cardHTML(it, `${no}.${pad2(ii + 1)}`);
    });
    html += `</div></section>`;
  });
  app.innerHTML = html;
  $$('.card', app).forEach((c, i) => { c._item = order[i]; c._sec = order[i] && i; });

  sideNav.innerHTML = DATA.map((cat, i) => `
    <button class="side-link" data-nav="sec-${cat.id}">
      <span class="sl-no">${pad2(i + 1)}</span>
      <svg class="sl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${cat.ic}</svg>
      ${cat.name}
      <span class="sl-n">${cat.items.length}</span>
    </button>`).join('');

  const total = order.length;
  $('#statComps').textContent = total;
  $('#statCats').textContent = DATA.length;
  $('#sideCount').textContent = total;

  buildPalette();
  buildOverlay();
  positionAllInks();
  prepDynamic();
}

/* ---------- 命令面板 / 全屏菜单内容 ---------- */
const paletteList = $('#paletteList');
function buildPalette() {
  paletteList.innerHTML =
    `<div class="palette-cap" data-cap>跳转分类</div>` +
    DATA.map((cat, i) => `
      <button data-goto="sec-${cat.id}" data-kw="${cat.name} ${cat.en}">
        <span class="pl-ic">${pad2(i + 1)}</span>${cat.name}
        <span class="pl-k">${cat.items.length}</span>
      </button>`).join('') +
    `<div class="palette-cap" data-cap>操作</div>
      <button data-act="theme" data-kw="切换主题 深色 浅色 theme"><span class="pl-ic">◐</span>切换深浅主题<span class="pl-k">T</span></button>
      <button data-act="expand" data-kw="展开 提示词 prompts"><span class="pl-ic">▤</span>展开全部提示词<span class="pl-k">E</span></button>
      <button data-act="top" data-kw="回到顶部 top"><span class="pl-ic">↑</span>回到顶部<span class="pl-k">Home</span></button>`;
}
function buildOverlay() {
  $('#overlayNav').innerHTML =
    DATA.slice(0, 4).map(cat => `<a href="#sec-${cat.id}" data-nav="sec-${cat.id}">${cat.name}</a>`).join('') +
    `<a href="#sec-animation" data-nav="sec-animation">全部动效</a>`;
}

/* ---------- 搜索过滤 ---------- */
let filterTimer;
function applyFilter(raw) {
  const kw = (raw || '').trim().toLowerCase();
  let visible = 0;
  $$('.card', app).forEach(card => {
    const it = card._item;
    const hay = (it.n + it.d + (it.k || '') + it.v.join('') + it.m.join('')).toLowerCase();
    const hit = !kw || hay.includes(kw);
    card.style.display = hit ? '' : 'none';
    if (hit) visible++;
  });
  $$('.sec', app).forEach(sec => {
    const any = $$('.card', sec).some(c => c.style.display !== 'none');
    sec.style.display = any ? '' : 'none';
  });
  $('#sideCount').textContent = visible;
  let empty = $('#emptyResult');
  if (!visible) {
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'emptyResult';
      empty.className = 'empty-result';
      empty.innerHTML = '<b>⌕</b>没有匹配的组件，换个关键词试试';
      app.appendChild(empty);
    }
    empty.style.display = '';
  } else if (empty) empty.style.display = 'none';
  positionAllInks();
  if (window._spy) window._spy();
}

/* ---------- 滑块指示器定位 ---------- */
function positionAllInks(root = document) {
  $$('[data-seg],[data-tabs],[data-menulist]', root).forEach(wrap => {
    const ink = wrap.querySelector('.seg-ink,.tab-ink,.ml-ink');
    const btn = wrap.querySelector('button.on') || wrap.querySelector('button.active');
    if (!ink || !btn) return;
    ink.style.width = btn.offsetWidth + 'px';
    ink.style.transform = `translate(${btn.offsetLeft - ink.offsetLeft}px,${btn.offsetTop - ink.offsetTop}px)`;
  });
}

/* ---------- 进场观察器 ---------- */
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const unit = el.dataset.unit || '';
  const dec = String(el.dataset.count).includes('.') ? 1 : 0;
  const t0 = performance.now(), dur = 1400;
  const fmt = v => (dec ? v.toFixed(1) : Math.round(v).toLocaleString('en-US')) + (unit ? `<i>${unit}</i>` : '');
  (function tick(t) {
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.innerHTML = fmt(target * e);
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

function revealCard(card) {
  card.classList.add('in');
  $$('[data-count]', card).forEach(countUp);
  $$('[data-prg]', card).forEach(f => { f.style.width = f.dataset.prg + '%'; });
  $$('.bar i[data-h]', card).forEach(b => { b.style.height = b.dataset.h + '%'; });
}

/* ---------- 页面入场：滚动联动显现（可逆的 Scroll-driven Reveal） ---------- */
function initCardScrollReveal() {
  const cards = $$('.card', app);
  let ticking = false;
  const upd = () => {
    ticking = false;
    const vh = innerHeight;
    for (const c of cards) {
      if (c._done) continue;
      const r = c.getBoundingClientRect();
      if (r.top > vh + 80) continue;
      /* 卡片顶边从视口下缘进入 → 到达视口约 62% 高度时完全显现；中途双向可逆 */
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.38)));
      if (p >= 0.995) {
        c.style.transition = '';
        c.style.opacity = '';
        c.style.transform = '';
        c._done = true;
        revealCard(c);
        continue;
      }
      c.style.transition = 'none';
      c.style.opacity = (0.08 + 0.92 * p).toFixed(3);
      c.style.transform = `translateY(${((1 - p) * 30).toFixed(1)}px)`;
    }
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
  addEventListener('resize', upd, { passive: true });
  upd();
}

function initObservers() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const t = e.target;
      if (t.classList.contains('stag') || t.classList.contains('boing')) t.classList.add('go');
      else if (t.classList.contains('rev-list')) t.classList.add('rev-in');
      else t.classList.add('in');
      io.unobserve(t);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -4% 0px' });
  $$('.stag,.boing,.rev-list,.tl,.ring,.bars,.lchart,.pdraw,.blr,.donut,.gauge', app).forEach(el => io.observe(el));
}

/* ---------- 演示预处理 ---------- */
function prepDynamic(root = document) {
  $$('[data-pct]', root).forEach(r => {
    if (r.classList.contains('gauge')) r.style.setProperty('--goff', 190 * (1 - (+r.dataset.pct) / 100));
    else r.style.setProperty('--off', 314 - 314 * (+r.dataset.pct) / 100);
  });
  $$('.pdraw', root).forEach(sv => $$('path,circle,rect,line', sv).forEach(p => {
    try { p.style.setProperty('--len', Math.ceil(p.getTotalLength()) || 400); } catch (e) { p.style.setProperty('--len', 400); }
  }));
  $$('.rng input', root).forEach(syncRange);
  $$('[data-count]', root).forEach(el => { if (!el.textContent.trim()) el.textContent = '0'; });
}
function syncRange(inp) {
  const min = +inp.min || 0, max = +inp.max || 100;
  inp.style.setProperty('--p', ((inp.value - min) / (max - min) * 100) + '%');
  const out = inp.closest('.rng') && inp.closest('.rng').querySelector('[data-rng-out]');
  if (out) out.textContent = inp.value + (inp.dataset.suffix || '');
}

/* ---------- 全局浮层 ---------- */
const mask = $('#mask'), sheetMask = $('#sheetMask'), paletteMask = $('#paletteMask'),
  menuOverlay = $('#menuOverlay'), sidebar = $('#sidebar');
let lastFocus = null;

function showToast(title, sub, type) {
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  const ico = type === 'err'
    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    : type === 'info'
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 11v6M12 7.5h.01"/><circle cx="12" cy="12" r="9"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5 10-11"/></svg>';
  el.innerHTML = `<span class="tst-ic">${ico}</span><span>${esc(title)}${sub ? `<small>${esc(sub)}</small>` : ''}</span>`;
  $('#toastStack').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 420); }, 2600);
  while ($('#toastStack').children.length > 4) $('#toastStack').firstElementChild.remove();
}

function openModal(ds) {
  lastFocus = document.activeElement;
  $('#modalTitle').textContent = ds.title || '确认执行此操作？';
  $('#modalDesc').textContent = ds.desc || '继续前请确认你的选择。';
  $('#modalOk').textContent = ds.ok || '确认';
  $('#modal').classList.toggle('info', ds.type === 'info');
  mask.classList.add('show');
  document.body.style.overflow = 'hidden';
  $('#modalOk').focus();
}
function closeModal(runOk) {
  mask.classList.remove('show');
  document.body.style.overflow = '';
  if (runOk) showToast('已确认', '操作执行成功');
  if (lastFocus) lastFocus.focus();
}
const openSheet = () => { sheetMask.classList.add('show'); document.body.style.overflow = 'hidden'; };
const closeSheet = () => { sheetMask.classList.remove('show'); document.body.style.overflow = ''; };

function openPalette() {
  lastFocus = document.activeElement;
  paletteMask.classList.add('show');
  const inp = $('#paletteInput');
  inp.value = ''; filterPalette('');
  setTimeout(() => inp.focus(), 60);
}
function closePalette() {
  paletteMask.classList.remove('show');
  if (lastFocus) lastFocus.focus();
}
let palIdx = 0;
function palButtons() { return $$('button', paletteList).filter(b => b.style.display !== 'none'); }
function filterPalette(kw) {
  kw = kw.trim().toLowerCase();
  palIdx = 0;
  $$('button', paletteList).forEach(b => {
    const hay = ((b.dataset.kw || '') + b.textContent).toLowerCase();
    b.style.display = !kw || hay.includes(kw) ? '' : 'none';
    b.classList.remove('cur');
  });
  $$('[data-cap]', paletteList).forEach(cap => {
    let el = cap.nextElementSibling, any = false;
    while (el && !el.hasAttribute('data-cap')) { if (el.style.display !== 'none') any = true; el = el.nextElementSibling; }
    cap.style.display = any ? '' : 'none';
  });
  const v = palButtons(); if (v[0]) v[0].classList.add('cur');
}
function palMove(d) {
  const v = palButtons(); if (!v.length) return;
  v[palIdx] && v[palIdx].classList.remove('cur');
  palIdx = (palIdx + d + v.length) % v.length;
  v[palIdx].classList.add('cur');
  v[palIdx].scrollIntoView({ block: 'nearest' });
}
function palRun(btn) {
  closePalette();
  if (btn.dataset.goto) scrollToSec(btn.dataset.goto);
  else if (btn.dataset.act === 'theme') toggleTheme();
  else if (btn.dataset.act === 'expand') { $$('.card').forEach(c => openDrawer(c, true)); showToast('已展开全部提示词'); }
  else if (btn.dataset.act === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSec(id) {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); sidebar.classList.remove('open'); }
}
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('lg-theme', html.dataset.theme); } catch (e) {}
  setTimeout(() => positionAllInks(), 60);
}
try { const t = localStorage.getItem('lg-theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}

/* ---------- 阅读进度 / 滚动高亮 ---------- */
const rail = $('#railFill');
addEventListener('scroll', () => {
  const h = document.documentElement;
  const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
  rail.style.width = (p * 100).toFixed(2) + '%';
}, { passive: true });

function initSpy() {
  const links = $$('.side-link');
  const secs = $$('.sec', app);
  const onScroll = () => {
    const y = scrollY + 150;
    let cur = null;
    for (const s of secs) {
      if (s.style.display === 'none') continue;
      if (s.getBoundingClientRect().top + scrollY <= y) cur = s;
    }
    links.forEach(l => l.classList.toggle('active', !!cur && l.dataset.nav === cur.id));
  };
  addEventListener('scroll', onScroll, { passive: true });
  window._spy = onScroll;
  onScroll();
}
/* ============================================================
   交互 · 事件委托
============================================================ */
function openDrawer(card, force) {
  const btn = card.querySelector('[data-toggle]');
  const pre = card.querySelector('.prompt-pre');
  if (pre.dataset.built !== '1') { pre.textContent = buildPrompt(card._item); pre.dataset.built = '1'; }
  const open = force !== undefined ? force : !card.classList.contains('drawer-open');
  card.classList.toggle('drawer-open', open);
  if (btn) {
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.childNodes[0].nodeValue = open ? '收起提示词 ' : 'AI 提示词 ';
  }
}
function setGroupVal(wrap, btn, inkSel) {
  $$('button', wrap).forEach(b => b.classList.remove('on', 'active'));
  btn.classList.add(wrap.matches('[data-tabs]') ? 'active' : 'on');
  positionAllInks(wrap.parentElement);
}

document.addEventListener('click', e => {
  const t = e.target;
  const btn = t.closest('button, a');
  const hit = sel => t.closest(sel);

  /* —— 补丁交互 —— */
  if (t.closest('a[href^="#"]')) {
    e.preventDefault();
    const href = t.closest('a').getAttribute('href');
    if (href === '#top') window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const grpBox = t.closest('[data-group]');
  if (grpBox && t.closest('button')) {
    $$('button', grpBox).forEach(b => b.classList.remove('on'));
    t.closest('button').classList.add('on'); return;
  }
  const sf = hit('[data-stepflow]');
  if (sf) {
    const steps = $$('.step', sf.closest('.stage'));
    let idx = steps.findIndex(s => s.classList.contains('now'));
    idx = Math.max(0, Math.min(steps.length - 1, idx + (+sf.dataset.stepflow)));
    steps.forEach((s, i) => { s.classList.toggle('done', i < idx); s.classList.toggle('now', i === idx); });
    return;
  }
  const tx = hit('[data-tgx]');
  if (tx) {
    const tg = tx.closest('.tg');
    tg.classList.add('closable', 'out');
    setTimeout(() => { tg.classList.remove('out'); tg.style.display = ''; }, 1600);
    setTimeout(() => tg.remove(), 3400);
    return;
  }
  const popB = hit('[data-pop]');
  if (popB) {
    const p = popB.parentElement.querySelector('.pop');
    const was = p.classList.contains('open');
    $$('.pop.open').forEach(x => x.classList.remove('open'));
    p.classList.toggle('open', !was); return;
  }
  const popC = hit('[data-pop-close]');
  if (popC) {
    popC.closest('.pop').classList.remove('open');
    if (popC.dataset.msg) showToast(popC.dataset.msg, null, popC.dataset.type);
    return;
  }
  if (!t.closest('.popw')) $$('.pop.open').forEach(p => p.classList.remove('open'));
  const keys = hit('[data-keys]');
  if (keys) {
    $$('.kbdrow .k', keys.closest('.stage')).forEach((k, i) => {
      setTimeout(() => { k.classList.add('press'); setTimeout(() => k.classList.remove('press'), 230); }, i * 190);
    });
    return;
  }
  if (hit('[data-backtop]')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const tdot = hit('[data-tdot]');
  if (tdot) { setTesti(tdot.closest('.tcar'), +tdot.dataset.tdot, true); return; }

  /* —— 日期选择 / 日历 —— */
  const dpT = hit('[data-dp]');
  if (dpT) {
    const pop = dpT.parentElement.querySelector('[data-dp-pop]');
    const was = pop.parentElement.classList.contains('open');
    $$('.dp.open').forEach(d => d.classList.remove('open'));
    if (!was) pop.parentElement.classList.add('open');
    return;
  }
  if (!t.closest('.dp')) $$('.dp.open').forEach(d => d.classList.remove('open'));
  const cn = hit('[data-calnav]');
  if (cn) {
    const cal = cn.closest('[data-cal]');
    let m = +cal.dataset.m + (+cn.dataset.calnav), y = +cal.dataset.y;
    if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
    cal.dataset.m = m; cal.dataset.y = y;
    renderCal(cal); return;
  }
  const day = hit('[data-day]');
  if (day) {
    const cal = day.closest('[data-cal]');
    cal.dataset.sel = day.dataset.day;
    renderCal(cal);
    const dp = cal.closest('.dp');
    if (dp) {
      dp.querySelector('[data-dp-val]').textContent =
        `${cal.dataset.y}-${String(+cal.dataset.m + 1).padStart(2, '0')}-${String(+cal.dataset.sel).padStart(2, '0')}`;
      dp.classList.remove('open');
    }
    return;
  }

  /* —— 界面术语图 —— */
  const zn = hit('[data-anat-zone]');
  const rw = hit('[data-anat-row]');
  if (zn || rw) {
    const card = (zn || rw).closest('.stage');
    setAnat(card, zn ? zn.dataset.anatZone : rw.dataset.anatRow);
    return;
  }

  /* —— 开屏引导卡片 —— */
  const onbN = hit('[data-onb-next]');
  if (onbN) {
    const card = onbN.closest('.stage');
    const total = card.querySelectorAll('.onb-slide').length;
    const cur = card._onb || 0;
    if (cur === total - 1) { showToast('引导完成', '欢迎正式开始使用'); onbGo(card, 0); }
    else onbGo(card, cur + 1);
    return;
  }
  const onbD = hit('[data-onb-dot]');
  if (onbD) { onbGo(onbD.closest('.stage'), +onbD.dataset.onbDot); return; }
  const onbS = hit('[data-onb-skip]');
  if (onbS) { onbGo(onbS.closest('.stage'), 0); showToast('已跳过引导', '可在设置中随时重新查看', 'info'); return; }

  /* —— 滚动吸附 / 页面转场 —— */
  const sn = hit('[data-snap-nav]');
  if (sn) {
    const row = sn.closest('.stage').querySelector('.snap-row');
    if (row) row.scrollBy({ left: (+sn.dataset.snapNav) * (row.clientWidth * 0.6), behavior: 'smooth' });
    return;
  }
  const pt = hit('[data-pt-nav]');
  if (pt) {
    const box = pt.closest('.stage').querySelector('[data-pt]');
    if (!box) return;
    const scrs = $$('[data-pt-scr]', box);
    let i = Math.max(0, Math.min(scrs.length - 1, (box._i || 0) + (+pt.dataset.ptNav)));
    box._i = i;
    scrs.forEach((s, k) => { s.classList.toggle('on', k === i); s.classList.toggle('before', k < i); });
    const idx = pt.closest('.stage').querySelector('[data-pt-idx]');
    if (idx) idx.textContent = `${i + 1} / ${scrs.length}`;
    return;
  }

  /* —— 补全批次三 —— */
  const spm = hit('[data-split-t]');
  if (spm) {
    const m = spm.closest('.split-wrap').querySelector('[data-split-m]');
    const was = m.classList.contains('open');
    $$('.split-menu.open').forEach(x => x.classList.remove('open'));
    m.classList.toggle('open', !was);
    return;
  }
  if (!t.closest('.split-wrap')) $$('.split-menu.open').forEach(x => x.classList.remove('open'));
  const lm = hit('[data-lmore-btn]');
  if (lm) {
    const box = lm.closest('[data-lmore]');
    if (box.dataset.busy) return;
    box.dataset.busy = '1';
    lm.textContent = '加载中…';
    const sk = document.createElement('div');
    sk.className = 'lm-sk';
    sk.innerHTML = '<span class="sk-b"></span><span class="sk-b" style="flex:.45"></span>';
    box.insertBefore(sk, lm);
    setTimeout(() => {
      sk.remove();
      const n = box.querySelectorAll('.lm-row').length + 1;
      const row = document.createElement('div');
      row.className = 'lm-row';
      row.innerHTML = `<i>◈</i>新加载条目 · 第 ${n} 条`;
      box.insertBefore(row, lm);
      lm.textContent = '加载更多 ↓';
      box.dataset.busy = '';
    }, 1100);
    return;
  }
  const hd = hit('[data-hud]');
  if (hd) {
    const lv = [20, 40, 60, 80, 100];
    hd._i = ((hd._i == null ? 2 : hd._i) + 1) % lv.length;
    const v = lv[hd._i];
    hd.querySelector('[data-hud-fill]').style.height = v + '%';
    hd.querySelector('[data-hud-val]').textContent = v;
    hd.querySelector('.hud-ic').textContent = v <= 20 ? '🔇' : v <= 40 ? '🔈' : v <= 70 ? '🔉' : '🔊';
    return;
  }
  const ncC = hit('[data-nc-clear]');
  if (ncC) {
    const nc = ncC.closest('[data-nc]');
    nc.querySelector('[data-nc-list]').classList.add('nc-hide');
    nc.querySelector('[data-nc-empty]').classList.remove('nc-hide');
    return;
  }
  const ncR = hit('[data-nc-reset]');
  if (ncR) {
    const nc = ncR.closest('[data-nc]');
    nc.querySelector('[data-nc-list]').classList.remove('nc-hide');
    nc.querySelector('[data-nc-empty]').classList.add('nc-hide');
    return;
  }

  /* —— 新动效批次 —— */
  const fa = hit('[data-flip-add]');
  if (fa) {
    const box = fa.closest('.stage').querySelector('[data-flipnum]');
    const digits = [...box.querySelectorAll('.fn-d')];
    const n = (+digits.map(d => d.textContent).join('') + 1) % 1000;
    const s = String(n).padStart(3, '0');
    digits.forEach((d, i) => {
      if (d.textContent === s[i]) return;
      d.classList.add('flip');
      setTimeout(() => { d.textContent = s[i]; d.classList.remove('flip'); }, 240);
    });
    return;
  }
  const pr = hit('[data-pulser]');
  if (pr) { pr.classList.remove('go'); void pr.offsetWidth; pr.classList.add('go'); return; }
  const sh = hit('[data-shake]');
  if (sh) {
    const b = sh.closest('.stage').querySelector('[data-shake-box]');
    b.classList.remove('go'); void b.offsetWidth; b.classList.add('go');
    return;
  }
  const jl = hit('[data-jelly]');
  if (jl) { jl.classList.remove('go'); void jl.offsetWidth; jl.classList.add('go'); return; }
  const tgo = hit('[data-timer-go]');
  if (tgo) { timerRun(tgo.closest('.stage').querySelector('[data-timer]')); return; }

  /* —— 整页场景真演示 —— */
  const fpP = hit('[data-fpplay]');
  if (fpP) {
    const ov = fpP.closest('.stage').querySelector('[data-fp-ov]');
    ov.classList.add('show');
    fpPlay(ov);
    return;
  }
  const fpT = hit('[data-fp-toggle]');
  if (fpT) { fpToggle(fpT.closest('[data-fp-ov]')); return; }
  const fpC = hit('[data-fp-close]');
  if (fpC) { fpClose(fpC.closest('[data-fp-ov]')); return; }
  if (t.classList && t.classList.contains('fp-ov')) { fpClose(t); return; }
  const fpOk = hit('[data-fxok]');
  if (fpOk && !fpOk.dataset.busy) {
    fpOk.dataset.busy = '1';
    const orig = fpOk.textContent;
    fpOk.textContent = '处理中…';
    setTimeout(() => { fpOk.textContent = '已开始 ✓'; fpOk.classList.add('fx-ok'); }, 650);
    setTimeout(() => { fpOk.textContent = orig; fpOk.classList.remove('fx-ok'); delete fpOk.dataset.busy; }, 2200);
    return;
  }
  const fpW = hit('[data-fxwant]');
  if (fpW) {
    const on = fpW.classList.toggle('fx-wanted');
    fpW.textContent = on ? '✓ 已想看' : '＋ 想看';
    if (on) showToast('已加入想看清单', '影视落地页');
    return;
  }
  const fpX2 = hit('[data-fpx]');
  if (fpX2) {
    if (fpX2.dataset.fpx === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('已返回首页', '404 演示', 'info');
    }
    return;
  }
  const fpDl = hit('[data-fxdl]');
  if (fpDl && !fpDl.dataset.busy) { fxDownload(fpDl); return; }
  const osN = hit('[data-os-next]');
  if (osN) {
    const site = osN.closest('[data-onesite]');
    const secs = $$('.os-sec', site);
    const idx = Math.min(secs.length - 1, Math.round(site.scrollTop / Math.max(1, site.clientHeight)) + 1);
    site.scrollTo({ top: idx * site.clientHeight, behavior: 'smooth' });
    return;
  }
  const osTop = hit('[data-os-top]');
  if (osTop) { osTop.closest('[data-onesite]').scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const osD = hit('[data-os-dot]');
  if (osD) {
    const site = osD.closest('[data-onesite]');
    site.scrollTo({ top: (+osD.dataset.osDot) * site.clientHeight, behavior: 'smooth' });
    return;
  }
  const lpP = hit('[data-lp-p]');
  if (lpP) {
    const box = lpP.closest('.stage');
    $$('[data-lp-p]', box).forEach(b => b.classList.remove('on'));
    lpP.classList.add('on');
    const presets = [
      ['基础版', '适合个人项目的组件集。'],
      ['专业版', '团队协作与全组件解锁。'],
      ['旗舰版', '含动效源码与优先支持。']
    ];
    const pick = presets[+lpP.dataset.lpP] || presets[0];
    box.querySelector('[data-lp-name]').textContent = pick[0];
    box.querySelector('[data-lp-desc]').textContent = pick[1];
    return;
  }
  const tmC = hit('[data-tm]');
  if (tmC) {
    const open = tmC.classList.contains('open');
    $$('[data-tm]', tmC.parentElement).forEach(c => c.classList.remove('open'));
    if (!open) tmC.classList.add('open');
    return;
  }
  const cbS = hit('[data-cb-sub]');
  if (cbS) {
    const wrap = cbS.closest('.cb-sub');
    const inp = wrap.querySelector('input');
    const val = inp.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      inp.focus();
      showToast('请输入有效的邮箱地址', '终章行动区', 'err');
      return;
    }
    cbS.textContent = '✓ 已订阅';
    cbS.disabled = true;
    inp.value = '';
    showToast('订阅成功，感谢关注', '终章行动区');
    return;
  }
  const t4 = hit('[data-404-t]');
  if (t4) {
    t4.classList.remove('go');
    void t4.offsetWidth;
    t4.classList.add('go');
    showToast('砰！数字 0 被你弹飞了一下', '404 页', 'info');
    return;
  }
  const lwI = hit('[data-lw]');
  if (lwI) {
    const row = lwI.closest('.logow');
    const was = lwI.classList.contains('on');
    $$('[data-lw]', row).forEach(x => x.classList.remove('on'));
    row.classList.toggle('dimmed', !was);
    if (!was) {
      lwI.classList.add('on');
      showToast('已选中 ' + lwI.textContent.trim(), '品牌墙');
    }
    return;
  }

  /* —— 聚光灯引导 —— */
  const spS = hit('[data-spot-start]');
  if (spS) { spotGo(spS.closest('.stage'), 0); return; }
  const spN = hit('[data-spot-next]');
  if (spN) {
    const c = spN.closest('.stage');
    spotGo(c, (c._spotI == null ? -1 : c._spotI) + 1);
    return;
  }
  const spK = hit('[data-spot-skip]');
  if (spK) { spotEnd(spK.closest('.stage')); return; }

  /* —— 桌面与网格 —— */
  const mbT = hit('[data-mb-t]');
  if (mbT) {
    const g = mbT.closest('.mb-g');
    const was = g.classList.contains('open');
    $$('.mb-g.open').forEach(x => x.classList.remove('open'));
    if (!was) g.classList.add('open');
    return;
  }
  if (!t.closest('.menubar')) $$('.mb-g.open').forEach(x => x.classList.remove('open'));
  const stX = hit('[data-st-x]');
  if (stX) {
    e.stopPropagation();
    const strip = stX.closest('[data-strip]');
    const tabs = $$('[data-st-tab]', strip);
    if (tabs.length <= 1) { showToast('至少保留一个标签页', null, 'info'); return; }
    const wasOn = stX.closest('.st-tab').classList.contains('on');
    const idx = tabs.indexOf(stX.closest('.st-tab'));
    stX.closest('.st-tab').remove();
    if (wasOn) {
      const rest = $$('[data-st-tab]', strip);
      const n = rest[Math.min(idx, rest.length - 1)];
      if (n) n.classList.add('on');
    }
    return;
  }
  const stTab = hit('[data-st-tab]');
  if (stTab) {
    $$('[data-st-tab]', stTab.closest('[data-strip]')).forEach(b => b.classList.remove('on'));
    stTab.classList.add('on');
    return;
  }
  const stNew = hit('[data-st-new]');
  if (stNew) {
    const strip = stNew.closest('[data-strip]');
    $$('[data-st-tab]', strip).forEach(b => b.classList.remove('on'));
    const n = $$('[data-st-tab]', strip).length + 1;
    const tab = document.createElement('button');
    tab.className = 'st-tab on';
    tab.setAttribute('data-st-tab', '');
    tab.innerHTML = `<i class="st-fav f${(n % 3) + 1}"></i><span class="st-txt">新标签 ${n}</span><em data-st-x aria-label="关闭">×</em>`;
    strip.insertBefore(tab, stNew);
    return;
  }
  const cmT = hit('[data-cm-t]');
  if (cmT) {
    e.stopPropagation();
    const m = cmT.parentElement.querySelector('[data-cm-m]');
    const was = m.classList.contains('open');
    $$('.cm-m.open').forEach(x => x.classList.remove('open'));
    $$('.cm-t.open').forEach(x => x.classList.remove('open'));
    if (!was) { m.classList.add('open'); cmT.classList.add('open'); }
    return;
  }
  const cmA = hit('[data-cm-act]');
  if (cmA) {
    const tbl = cmA.closest('[data-cmtbl]');
    const dir = cmA.dataset.cmAct === 'asc' ? 1 : -1;
    const tbody = tbl.querySelector('tbody');
    const rows = $$('tr', tbody);
    rows.sort((a, b) => dir * a.cells[0].textContent.trim().localeCompare(b.cells[0].textContent.trim(), 'zh'));
    rows.forEach(r => tbody.appendChild(r));
    $$('.cm-m.open,.cm-t.open').forEach(x => x.classList.remove('open'));
    showToast(dir > 0 ? '已按任务升序排列' : '已按任务降序排列', '列头菜单', 'info');
    return;
  }
  if (!t.closest('.cm-tbl')) $$('.cm-m.open,.cm-t.open').forEach(x => x.classList.remove('open'));
  const stClear = hit('[data-st-clear]');
  if (stClear) {
    const wrap = stClear.closest('[data-seltbl]');
    $$('input', wrap).forEach(c => { c.checked = false; c.indeterminate = false; });
    wrap.querySelector('[data-st-bar]').classList.remove('show');
    return;
  }
  const ttT = hit('[data-tt-t]');
  if (ttT) {
    const key = ttT.dataset.ttT;
    const tbl = ttT.closest('[data-tt]');
    const rows = $$(`tr[data-tt-g="${key}"]`, tbl);
    const open = ttT.classList.toggle('open');
    ttT.innerHTML = ttT.innerHTML.replace(/^[▸▾]\s*/, (open ? '▾ ' : '▸ '));
    rows.forEach(r => r.classList.toggle('show', open));
    return;
  }
  const mdI = hit('[data-md-i]');
  if (mdI) {
    const box = mdI.closest('[data-md]');
    $$('[data-md-i]', box).forEach(b => b.classList.remove('on'));
    mdI.classList.add('on');
    const d = box.querySelector('.md-detail');
    d.style.opacity = '0';
    setTimeout(() => {
      box.querySelector('[data-md-n]').textContent = mdI.dataset.name;
      box.querySelector('[data-md-r]').textContent = mdI.dataset.role;
      box.querySelector('[data-md-d]').textContent = mdI.dataset.desc;
      d.style.opacity = '1';
    }, 150);
    return;
  }
  const inspT = hit('[data-insp-t]');
  if (inspT) { inspT.closest('.insp-g').classList.toggle('open'); return; }
  const fxT = hit('[data-fx-t]');
  if (fxT) {
    const box = fxT.closest('[data-fx]');
    $$('[data-fx-t]', box).forEach(b => b.classList.remove('on'));
    fxT.classList.add('on');
    renderFx(box, fxT.dataset.fxT);
    return;
  }
  const psbT = hit('[data-psb-t]');
  if (psbT) { psbT.closest('[data-psb]').classList.toggle('mini'); return; }
  const cascCur = hit('.casc-cur');
  if (cascCur) {
    const casc = cascCur.closest('[data-casc]');
    const was = casc.classList.contains('open');
    $$('.casc.open').forEach(x => x.classList.remove('open'));
    if (!was) casc.classList.add('open');
    return;
  }
  if (!t.closest('[data-casc]')) $$('.casc.open').forEach(x => x.classList.remove('open'));
  const cascP = hit('[data-casc-prov]');
  if (cascP) {
    const casc = cascP.closest('[data-casc]');
    $$('[data-casc-prov]', casc).forEach(b => b.classList.remove('on'));
    cascP.classList.add('on');
    renderCascCities(casc, cascP.dataset.cascProv);
    return;
  }
  const cascC = hit('[data-casc-city]');
  if (cascC) {
    const casc = cascC.closest('[data-casc]');
    const prov = ($('[data-casc-prov].on', casc) || {}).dataset?.cascProv || '';
    casc.querySelector('[data-casc-cur]').textContent = prov + ' / ' + cascC.dataset.cascCity;
    casc.classList.remove('open');
    return;
  }
  const tfGo = hit('[data-tf-go]');
  if (tfGo) { tfMove(tfGo.closest('[data-transfer]'), tfGo.dataset.tfGo); return; }
  const acctT = hit('[data-acct-t]');
  if (acctT) {
    const w = acctT.closest('.acct-wrap');
    const was = w.classList.contains('open');
    $$('.acct-wrap.open').forEach(x => x.classList.remove('open'));
    if (!was) w.classList.add('open');
    return;
  }
  if (!t.closest('.acct-wrap')) $$('.acct-wrap.open').forEach(x => x.classList.remove('open'));
  const gridSet = hit('[data-grid-set]');
  if (gridSet) {
    const g = gridSet.closest('.stage').querySelector('[data-grid12]');
    renderGrid(g, +gridSet.dataset.gridSet);
    return;
  }
  const irisT = hit('[data-iris-toggle]');
  if (irisT) { irisT.closest('.stage').querySelector('[data-iris]').classList.toggle('open'); return; }
  const spGo = hit('[data-segprg-go]');
  if (spGo) {
    const bars = $$('.segprg i', spGo.closest('.stage'));
    const next = bars.find(b => !b.classList.contains('on'));
    if (next) { next.classList.add('on', 'pulse'); setTimeout(() => next.classList.remove('pulse'), 480); }
    else showToast('已全部完成', null, 'info');
    return;
  }
  const spRe = hit('[data-segprg-reset]');
  if (spRe) {
    $$('.segprg i', spRe.closest('.stage')).forEach(b => b.classList.remove('on', 'pulse'));
    return;
  }
  const fs = hit('[data-flip-shuffle]');
  if (fs) {
    const list = fs.closest('.stage').querySelector('[data-flip-list]');
    const items = $$(':scope > .fl-i', list);
    const firsts = items.map(el => el.getBoundingClientRect().top);
    [...items].sort(() => Math.random() - 0.5).forEach(el => list.appendChild(el));
    items.forEach((el, i) => {
      const last = el.getBoundingClientRect().top;
      const dy = firsts[i] - last;
      if (!dy) return;
      el.style.transition = 'none';
      el.style.transform = `translateY(${dy}px)`;
      requestAnimationFrame(() => {
        el.style.transition = 'transform .6s var(--spring)';
        el.style.transform = '';
      });
    });
    return;
  }
  const lvT = hit('[data-louver-toggle]');
  if (lvT) { lvT.closest('.stage').querySelector('[data-louver]').classList.toggle('open'); return; }
  const alT = hit('[data-artl-to]');
  if (alT) {
    const box = alT.closest('[data-artl]');
    const body = box.querySelector('[data-artl-body]');
    const heads = $$('h4', body);
    const i = +alT.dataset.artlTo;
    $$('[data-artl-to]', box).forEach(b => b.classList.remove('on'));
    alT.classList.add('on');
    if (heads[i]) body.scrollTo({ top: heads[i].offsetTop - body.firstElementChild.offsetTop, behavior: 'smooth' });
    return;
  }
  const actB = t.closest('.actbar button');
  if (actB) {
    $$('button', actB.parentElement).forEach(b => b.classList.remove('on'));
    actB.classList.add('on');
  }

  /* —— 卡片提示词 —— */
  const tog = hit('[data-toggle]');
  if (tog) { openDrawer(tog.closest('.card')); return; }

  const chip = hit('.chip[data-opt]');
  if (chip) {
    const g = OPT_GROUPS.find(x => x.key === chip.dataset.opt);
    if (g.multi) {
      OPTS[g.key].has(chip.dataset.val) ? OPTS[g.key].delete(chip.dataset.val) : OPTS[g.key].add(chip.dataset.val);
      chip.classList.toggle('on');
    } else {
      OPTS[g.key] = chip.dataset.val;
      $$(`.chip[data-opt="${g.key}"]`).forEach(c => c.classList.toggle('on', c.dataset.val === chip.dataset.val));
    }
    refreshAllPrompts();
    $$('.card.drawer-open .prompt-pre').forEach(pre => pre.textContent = buildPrompt(pre.closest('.card')._item));
    return;
  }

  const cp = hit('[data-copy]');
  if (cp) {
    const card = cp.closest('.card');
    const pre = card.querySelector('.prompt-pre');
    if (pre.dataset.built !== '1') { pre.textContent = buildPrompt(card._item); pre.dataset.built = '1'; }
    copyText(pre.textContent, cp, '复制提示词');
    return;
  }
  const cc = hit('[data-copycode]');
  if (cc) {
    const pre = cc.closest('.codeblk').querySelector('pre');
    copyText(pre.innerText, cc, '复制');
    return;
  }
  const ct = hit('[data-copytext]');
  if (ct) { copyText(ct.dataset.copytext, ct); return; }
  if (hit('[data-imx]')) { openImx(hit('[data-imx]').closest('.card')); return; }
  if (hit('[data-imx-close]') || t === $('#imxMask')) { closeImx(); return; }
  if (hit('[data-imx-copy]') && imxItem) { copyText(buildPrompt(imxItem), hit('[data-imx-copy]')); return; }

  /* —— 通用控件 —— */
  const sw = hit('[data-sw]'); if (sw) { sw.classList.toggle('on'); return; }

  const segT = hit('[data-seg-t]'); if (segT) { setGroupVal(segT.closest('[data-seg]'), segT); return; }
  const tabT = hit('[data-tab]'); if (tabT) { setGroupVal(tabT.closest('[data-tabs]'), tabT); return; }
  const tbT = hit('[data-tb]'); if (tbT) {
    $$('[data-tb]', tbT.closest('[data-tabbar]')).forEach(b => b.classList.remove('on'));
    tbT.classList.add('on'); return;
  }
  const mlT = hit('[data-ml]'); if (mlT) { setGroupVal(mlT.closest('[data-menulist]'), mlT); return; }
  const pgT = hit('[data-pg-i]');
  if (pgT) {
    const wrap = pgT.closest('[data-pg]');
    const btns = $$('[data-pg-i]', wrap);
    if (pgT.dataset.pgI === 'next') {
      const nxt = btns.slice(btns.indexOf(wrap.querySelector('.on')) + 1).find(b => b.dataset.pgI !== 'next');
      if (nxt) { btns.forEach(b => b.classList.remove('on')); nxt.classList.add('on'); showToast('已翻到第 ' + nxt.textContent.trim() + ' 页', null, 'info'); }
      else showToast('已经是最后一页', null, 'info');
    } else { btns.forEach(b => b.classList.remove('on')); pgT.classList.add('on'); }
    return;
  }

  const accH = hit('[data-acc-h]'); if (accH) { accH.closest('.acc-i').classList.toggle('open'); return; }

  const ddT = hit('[data-dd-t]'); if (ddT) {
    const dd = ddT.closest('.dd');
    const was = dd.classList.contains('open');
    $$('.dd.open').forEach(d => d.classList.remove('open'));
    dd.classList.toggle('open', !was); return;
  }
  const ddI = hit('[data-dd-i]'); if (ddI) {
    const dd = ddI.closest('.dd');
    $$('[data-dd-i]', dd).forEach(b => b.classList.remove('sel'));
    ddI.classList.add('sel');
    dd.querySelector('.dd-lab').textContent = ddI.textContent.trim();
    dd.classList.remove('open'); return;
  }
  const nvT = hit('[data-navdd-t]'); if (nvT) {
    const nv = nvT.closest('.navdd');
    const was = nv.classList.contains('open');
    $$('.navdd.open').forEach(d => d.classList.remove('open'));
    nv.classList.toggle('open', !was); return;
  }
  if (!t.closest('.dd')) $$('.dd.open').forEach(d => d.classList.remove('open'));
  if (!t.closest('.navdd')) $$('.navdd.open').forEach(d => d.classList.remove('open'));

  /* —— Toast / 模态 / 动作面板 —— */
  const ts = hit('[data-toast]'); if (ts) { showToast(ts.dataset.msg || '操作成功，更改已保存', ts.dataset.sub, ts.dataset.type); return; }
  const mo = hit('[data-modal]'); if (mo) { openModal(mo.dataset); return; }
  if (hit('[data-modal-close]') || t === mask) { closeModal(false); return; }
  if (t.closest('#modalOk')) { closeModal(true); return; }
  if (hit('[data-sheet]')) { openSheet(); return; }
  if (hit('[data-sheet-close]') || t === sheetMask) { closeSheet(); return; }
  const sp = hit('[data-sheet-pick]');
  if (sp) { closeSheet(); showToast(sp.dataset.sheetPick + ' —— 已完成', '来自动作面板演示'); return; }

  /* —— 命令面板 / 汉堡菜单 —— */
  if (hit('[data-cmd]')) { openPalette(); return; }
  if (t === paletteMask) { closePalette(); return; }
  const palBtn = t.closest('#paletteList button');
  if (palBtn) { palRun(palBtn); return; }
  const burger = hit('[data-burger]');
  if (burger) {
    const on = !menuOverlay.classList.contains('show');
    menuOverlay.classList.toggle('show', on);
    burger.classList.toggle('x', on);
    document.body.style.overflow = on ? 'hidden' : '';
    return;
  }
  if (menuOverlay.classList.contains('show') && (t === menuOverlay || t.closest('#overlayNav a'))) {
    menuOverlay.classList.remove('show');
    $$('.burger').forEach(b => b.classList.remove('x'));
    document.body.style.overflow = '';
  }

  /* —— 卡片内局部浮层 —— */
  const loc = hit('[data-loc]');
  if (loc) {
    const stage = loc.closest('.stage');
    const panel = stage.querySelector('.loc-' + loc.dataset.loc);
    if (panel) {
      panel.classList.add('show');
      if (loc.dataset.fslAuto) setTimeout(() => panel.classList.remove('show'), +loc.dataset.fslAuto);
    }
    if (loc.dataset.loc === 'sheet' || loc.dataset.loc === 'side') {
      const dim = stage.querySelector('.loc-ov');
      if (dim) dim.classList.add('show');
    }
    return;
  }
  const locC = hit('[data-loc-close]');
  if (locC) {
    const st = locC.closest('.stage') || locC.closest('.card');
    $$('.loc-ov.show,.loc-sheet.show,.loc-side.show,.loc-fsl.show', st).forEach(p => p.classList.remove('show'));
    if (locC.dataset.msg) showToast(locC.dataset.msg, locC.dataset.sub, locC.dataset.type);
    return;
  }
  if (t.classList && t.classList.contains('loc-ov')) {
    const st = t.closest('.stage');
    if (t.classList.contains('fp-ov')) fpClose(t);
    $$('.loc-ov.show,.loc-sheet.show,.loc-side.show,.loc-fsl.show', st).forEach(p => p.classList.remove('show'));
    return;
  }

  /* —— 关闭类 —— */
  const x = hit('[data-x]');
  if (x) {
    const box = x.closest('.alert,.banner,.notif');
    if (box) { box.classList.add('out'); setTimeout(() => box.classList.remove('out'), 1800); }
    return;
  }
  const step = hit('[data-step]');
  if (step) {
    const box = step.closest('.stp'), out = box.querySelector('.stp-val');
    let v = +out.textContent + (+step.dataset.step);
    v = Math.max(0, Math.min(99, v));
    out.textContent = v;
    out.animate([{ transform: 'translateY(' + (step.dataset.step > 0 ? 6 : -6) + 'px)', opacity: .4 }, { transform: 'none', opacity: 1 }], { duration: 300, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    return;
  }
  const star = hit('[data-star]');
  if (star) {
    const rate = star.closest('.rate');
    const idx = +star.dataset.star;
    rate.dataset.val = idx;
    $$('button', rate).forEach(s => s.classList.toggle('hit', +s.dataset.star <= idx));
    return;
  }
  const pw = hit('[data-pw]');
  if (pw) {
    const inp = pw.closest('.pw').querySelector('input');
    const show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    pw.innerHTML = show
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4l16 16M10.6 6.3A9.6 9.6 0 0 1 12 6.2c6.2 0 10 5.8 10 5.8a17.4 17.4 0 0 1-3.4 3.9M6.5 8.1A17 17 0 0 0 2 12s3.8 5.8 10 5.8c1.3 0 2.4-.2 3.5-.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
    return;
  }

  /* —— 动效演示控制 —— */
  const rp = hit('[data-replay]');
  if (rp) {
    const stage = rp.closest('.stage');
    const kind = rp.dataset.replay;
    if (kind === 'stag') {
      const el = stage.querySelector('.stag');
      el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
    } else if (kind === 'rev') {
      replayTransition(stage.querySelector('.rev-list'), 'rev-in');
    } else if (kind === 'path') {
      replayTransition(stage.querySelector('.pdraw'), 'in');
    } else if (kind === 'blur') {
      $$('.blr', stage).forEach(el => replayTransition(el, 'in'));
    } else if (kind === 'strig') {
      const box = stage.querySelector('[data-strig]');
      if (box) {
        box.scrollTop = 0;
        const tg = box.querySelector('.strig-target');
        if (tg) { tg.classList.remove('fired'); void tg.offsetWidth; }
      }
    } else if (kind === 'count') {
      $$('[data-count]', stage).forEach(el => { el.textContent = '0'; countUp(el); });
    } else if (kind === 'boing') {
      const el = stage.querySelector('[data-boing]');
      if (el) { el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); }
    }
    return;
  }
  const lb = hit('[data-loadbtn]');
  if (lb && !lb.classList.contains('loading') && !lb.classList.contains('done')) {
    const txt = lb.querySelector('.lb-txt');
    const orig = txt.innerHTML;
    lb.classList.add('loading');
    setTimeout(() => { txt.textContent = '已保存'; lb.classList.remove('loading'); lb.classList.add('done'); }, 1400);
    setTimeout(() => { lb.classList.remove('done'); txt.innerHTML = orig; }, 3300);
    return;
  }
  const cf = hit('[data-confirm]');
  if (cf) { cf.closest('.confirm').classList.add('open'); return; }
  if (hit('[data-cf-no]')) { t.closest('.confirm').classList.remove('open'); return; }
  if (hit('[data-cf-yes]')) {
    const c = t.closest('.confirm'); c.classList.remove('open');
    showToast('已删除', '演示数据已移除', 'err'); return;
  }
  const rt = hit('[data-retry]'); if (rt) { showToast('正在重新加载…', '请稍候', 'info'); return; }
  const fl = hit('[data-flip]');
  if (fl) {
    const target = (fl.classList.contains('flip') || fl.classList.contains('fmenu')) ? fl : fl.closest('.flip');
    if (target) target.classList.toggle('flipped');
    return;
  }
  const pl = hit('[data-play]'); if (pl) { pl.closest('.player').classList.toggle('playing'); return; }
  const tr = hit('[data-tree-t]'); if (tr) { tr.closest('.tree-i').classList.toggle('open'); return; }
  const sw2 = hit('[data-swap]');
  if (sw2) {
    const box = sw2.closest('.stage').querySelector('.swap');
    box.classList.toggle('show-b');
    sw2.textContent = box.classList.contains('show-b') ? '重新加载骨架屏' : '模拟数据加载';
    return;
  }
  const cfx = hit('[data-confetti]'); if (cfx) { burst(cfx.closest('.conf-zone')); return; }

  /* —— 侧边栏 / 导航 —— */
  const nav = hit('[data-nav]');
  if (nav) { scrollToSec(nav.dataset.nav); $$('.side-link').forEach(l => l.classList.toggle('active', l === nav)); return; }

  /* —— 顶部控件 —— */
  if (t.closest('#themeToggle')) { toggleTheme(); return; }
  if (t.closest('#sideToggle')) {
    const on = sidebar.classList.toggle('open');
    $('#sideToggle').setAttribute('aria-expanded', on);
    return;
  }
});

/* ---------- 复制 ---------- */
function copyText(text, btn, label) {
  const done = ok => {
    if (!ok) { showToast('复制失败', '当前环境不允许访问剪贴板', 'err'); return; }
    btn.classList.add('ok');
    const old = btn.innerHTML;
    btn.innerHTML = '✓ 已复制';
    showToast('已复制到剪贴板', '可以直接粘贴给 AI');
    setTimeout(() => { btn.classList.remove('ok'); btn.innerHTML = old; }, 1800);
  };
  if (navigator.clipboard && location.protocol !== 'file:') {
    navigator.clipboard.writeText(text).then(() => done(true), () => done(fallbackCopy(text)));
  } else done(fallbackCopy(text));
}
function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand('copy');
    ta.remove(); return ok;
  } catch (e) { return false; }
}

/* ---------- 表单输入 ---------- */
document.addEventListener('input', e => {
  const t = e.target;
  if (t.matches('.rng input')) { syncRange(t); return; }
  if (t.matches('[data-valid]')) {
    const box = t.closest('.vbox'), v = t.value.trim();
    box.classList.remove('ok', 'err');
    if (!v) return;
    const rule = t.dataset.valid;
    const pass = rule === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      : rule === 'code' ? /^\d{6}$/.test(v)
      : v.length >= 6;
    box.classList.add(pass ? 'ok' : 'err');
    const msg = box.querySelector('.vmsg');
    if (msg) msg.innerHTML = pass
      ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4.5 12.5l5 5 10-11"/></svg>格式正确，可以提交'
      : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5h.01"/></svg> ' +
        (rule === 'email' ? '请输入有效的邮箱地址' : rule === 'code' ? '验证码为 6 位数字' : '至少输入 6 个字符');
    return;
  }
  if (t.id === 'searchInput') { clearTimeout(filterTimer); filterTimer = setTimeout(() => applyFilter(t.value), 160); return; }
  if (t.id === 'paletteInput') { filterPalette(t.value); return; }
});

document.addEventListener('keydown', e => {
  const t = e.target;
  /* 标签输入 */
  if (t.matches('.chips-in input') && (e.key === 'Enter' || e.key === ',')) {
    e.preventDefault();
    const v = t.value.trim();
    if (!v) return;
    const chip = document.createElement('span');
    chip.className = 'chipx';
    chip.innerHTML = esc(v) + ' <button aria-label="移除" data-chipx>×</button>';
    t.before(chip); t.value = '';
    return;
  }
  if (t.matches('.chips-in input') && e.key === 'Backspace' && !t.value) {
    const prev = t.previousElementSibling;
    if (prev && prev.classList.contains('chipx')) prev.remove();
    return;
  }
  /* 命令面板键盘 */
  if (paletteMask.classList.contains('show')) {
    if (e.key === 'Escape') { closePalette(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); palMove(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); palMove(-1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const v = palButtons(); if (v[palIdx]) palRun(v[palIdx]);
    }
    return;
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPalette(); return; }
  if (e.key === 'Escape') {
    if ($('#imxMask').classList.contains('show')) return closeImx();
    if (paletteMask.classList.contains('show')) return closePalette();
    if (mask.classList.contains('show')) return closeModal(false);
    if (sheetMask.classList.contains('show')) return closeSheet();
    if (menuOverlay.classList.contains('show')) {
      menuOverlay.classList.remove('show');
      $$('.burger').forEach(b => b.classList.remove('x'));
      document.body.style.overflow = ''; return;
    }
    const loc = $('.loc-ov.show,.loc-sheet.show,.loc-side.show,.loc-fsl.show');
    if (loc) {
      if (loc.classList.contains('fp-ov')) fpClose(loc);
      return loc.classList.remove('show');
    }
    $$('.dd.open,.navdd.open,.ctx-menu.show,.lp-menu.show').forEach(el => el.classList.remove('show', 'open'));
  }
});

document.addEventListener('click', e => {
  const x = e.target.closest('[data-chipx]');
  if (x) x.closest('.chipx').remove();
}, true);

/* ---------- 评分悬停预览 ---------- */
document.addEventListener('pointerover', e => {
  const b = e.target.closest('.rate button');
  if (!b) return;
  const rate = b.closest('.rate'), idx = +b.dataset.star, cur = +rate.dataset.val || 0;
  $$('button', rate).forEach(s => s.classList.toggle('hit', +s.dataset.star <= idx));
  rate._restore = cur;
});
document.addEventListener('pointerout', e => {
  const rate = e.target.closest('.rate');
  if (!rate || rate.contains(e.relatedTarget)) return;
  const cur = +rate.dataset.val || 0;
  $$('button', rate).forEach(s => s.classList.toggle('hit', +s.dataset.star <= cur));
});

/* ---------- 右键菜单（卡片内） ---------- */
document.addEventListener('contextmenu', e => {
  const zone = e.target.closest('[data-ctx]');
  if (!zone) return;
  e.preventDefault();
  const stage = zone.closest('.stage');
  const menu = stage.querySelector('.ctx-menu');
  if (!menu) return;
  $$('.ctx-menu.show').forEach(m => m.classList.remove('show'));
  const r = stage.getBoundingClientRect();
  const mw = 168, mh = menu.offsetHeight || 190;
  menu.style.left = Math.min(Math.max(6, e.clientX - r.left), r.width - mw - 6) + 'px';
  menu.style.top = Math.min(Math.max(6, e.clientY - r.top), r.height - mh - 6) + 'px';
  menu.classList.add('show');
});
document.addEventListener('pointerdown', e => {
  if (!e.target.closest('.ctx-menu')) $$('.ctx-menu.show').forEach(m => m.classList.remove('show'));
  if (!e.target.closest('.lp-menu') && !e.target.closest('[data-lp]')) $$('.lp-menu.show').forEach(m => m.classList.remove('show'));
});

/* ---------- 指针动效：卡片镜面高光 ---------- */
document.addEventListener('pointermove', e => {
  const card = e.target.closest && e.target.closest('.card');
  if (card) {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }
}, { passive: true });

/* ---------- 指针动效：按元素挂载 ---------- */
function bindPointerFX(root = document) {
  /* 光标辉光 */
  $$('[data-glow]', root).forEach(el => el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100) + '%');
    el.style.setProperty('--gy', ((e.clientY - r.top) / r.height * 100) + '%');
  }));
  /* 磁吸按钮 */
  $$('[data-magnetic]', root).forEach(zone => {
    const btn = zone.querySelector('.mag');
    zone.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * .3}px,${dy * .38}px)`;
    });
    zone.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
  /* 3D 倾斜 */
  $$('[data-tilt]', root).forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(700px) rotateY(${px * 16}deg) rotateX(${-py * 14}deg) translateY(-4px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
  /* 视差分层 */
  $$('[data-parallax]', root).forEach(el => {
    const layers = $$('[data-depth]', el);
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      layers.forEach(l => {
        const d = +l.dataset.depth;
        l.style.transform = `translate(${px * d}px,${py * d}px)`;
      });
    });
    el.addEventListener('pointerleave', () => layers.forEach(l => l.style.transform = ''));
  });
  /* 涟漪（用 click 绑定：鼠标、触屏、键盘激活都能触发） */
  $$('[data-ripple]', root).forEach(btn => btn.addEventListener('click', e => {
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 2.4;
    const s = document.createElement('span');
    s.className = 'rp';
    s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    btn.appendChild(s);
    s.addEventListener('animationend', () => s.remove());
  }));
  /* 弹簧拖拽小球 */
  $$('[data-drag]', root).forEach(zone => {
    const ball = zone.querySelector('.drag-ball');
    let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;
    ball.addEventListener('pointerdown', e => {
      dragging = true; ball.classList.remove('snap');
      ball.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY;
      const m = /translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(ball.style.transform || '');
      ox = m ? +m[1] : 0; oy = m ? +m[2] : 0;
    });
    ball.addEventListener('pointermove', e => {
      if (!dragging) return;
      ball.style.transform = `translate(${ox + e.clientX - sx}px,${oy + e.clientY - sy}px)`;
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      ball.classList.add('snap');
      ball.style.transform = '';
    };
    ball.addEventListener('pointerup', end);
    ball.addEventListener('pointercancel', end);
  });
  /* 下拉刷新 */
  $$('[data-pull]', root).forEach(el => {
    const body = el.querySelector('.pull-body'), ind = el.querySelector('.pull-ind');
    let sy = 0, pulling = false, dist = 0;
    el.addEventListener('pointerdown', e => {
      if (el.classList.contains('loading')) return;
      pulling = true; sy = e.clientY; dist = 0;
      body.style.transition = 'none'; ind.style.transition = 'none';
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', e => {
      if (!pulling) return;
      dist = Math.max(0, Math.min(72, (e.clientY - sy) * .55));
      body.style.transform = `translateY(${dist}px)`;
      ind.style.transform = `translateY(${dist - 46}px)`;
      el.classList.toggle('ready', dist > 52);
    });
    const done = () => {
      if (!pulling) return;
      pulling = false;
      body.style.transition = ''; ind.style.transition = '';
      if (dist > 52) {
        el.classList.add('loading');
        body.style.transform = 'translateY(46px)';
        ind.style.transform = 'translateY(0)';
        setTimeout(() => {
          el.classList.remove('loading', 'ready');
          body.style.transform = ''; ind.style.transform = 'translateY(-100%)';
          showToast('列表已刷新', '下拉刷新演示', 'info');
        }, 1300);
      } else {
        el.classList.remove('ready');
        body.style.transform = ''; ind.style.transform = 'translateY(-100%)';
      }
    };
    el.addEventListener('pointerup', done);
    el.addEventListener('pointercancel', done);
  });
  /* 滑动操作 */
  $$('[data-swipe]', root).forEach(row => {
    const front = row.querySelector('.sw-front');
    let sx = 0, base = 0, dragging = false, open = false;
    front.addEventListener('pointerdown', e => {
      if (e.target.closest('.sw-acts')) return;
      dragging = true; sx = e.clientX;
      base = open ? -132 : 0;
      front.classList.add('dragging');
      front.setPointerCapture(e.pointerId);
    });
    front.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = Math.max(-132, Math.min(0, base + e.clientX - sx));
      front.style.transform = `translateX(${dx}px)`;
    });
    const end = e => {
      if (!dragging) return;
      dragging = false;
      front.classList.remove('dragging');
      const dx = base + (e.clientX - sx);
      open = dx < -60;
      front.style.transform = `translateX(${open ? -132 : 0}px)`;
    };
    front.addEventListener('pointerup', end);
    front.addEventListener('pointercancel', end);
    $$('.sw-acts button', row).forEach(b => b.addEventListener('click', () => {
      front.style.transform = 'translateX(0)'; open = false;
      showToast(b.classList.contains('sw-del') ? '已删除该条目' : '进入编辑模式', '滑动操作演示', b.classList.contains('sw-del') ? 'err' : 'info');
    }));
  });
  /* 长按菜单 */
  $$('[data-lp]', root).forEach(zone => {
    const menu = zone.querySelector('.lp-menu');
    let timer = null, moved = false, sx = 0, sy = 0;
    zone.addEventListener('pointerdown', e => {
      moved = false; sx = e.clientX; sy = e.clientY;
      zone.classList.add('holding');
      timer = setTimeout(() => {
        if (!moved) { menu.classList.add('show'); if (navigator.vibrate) navigator.vibrate(12); }
      }, 520);
    });
    zone.addEventListener('pointermove', e => { if (Math.abs(e.clientX - sx) > 9 || Math.abs(e.clientY - sy) > 9) moved = true; });
    const cancel = () => { clearTimeout(timer); zone.classList.remove('holding'); };
    zone.addEventListener('pointerup', cancel);
    zone.addEventListener('pointercancel', cancel);
    $$('button', menu).forEach(b => b.addEventListener('click', () => {
      menu.classList.remove('show');
      showToast(b.textContent.trim() + ' —— 已执行', '长按菜单演示', 'info');
    }));
  });
}

/* ---------- 礼花 ---------- */
function burst(zone) {
  const colors = ['#6d7dff', '#c44dff', '#28c8e0', '#ffc25e', '#3ddc97', '#ff6b6b', '#ff5e8f'];
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('i');
    s.className = 'conf-bit';
    const ang = (Math.PI * 2 * i) / 30 + Math.random() * .5;
    const dist = 70 + Math.random() * 95;
    s.style.cssText =
      `--cx:${Math.cos(ang) * dist}px;--cy:${Math.sin(ang) * dist - 34}px;--cr:${Math.random() * 720 - 360}deg;` +
      `background:${colors[i % colors.length]};animation-delay:${Math.random() * .12}s;` +
      `left:${44 + Math.random() * 12}%;top:${50 + Math.random() * 10}%`;
    zone.appendChild(s);
    setTimeout(() => s.remove(), 1400);
  }
}

/* ---------- 拖拽排序（HTML5 DnD） ---------- */
document.addEventListener('dragstart', e => {
  const it = e.target.closest && e.target.closest('.dnd-i');
  if (!it) return;
  it.classList.add('drag');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', 'x');
  window._dndEl = it;
});
document.addEventListener('dragover', e => {
  const it = e.target.closest && e.target.closest('.dnd-i');
  if (!it || it === window._dndEl) return;
  e.preventDefault();
  $$('.dnd-i.over').forEach(x => x.classList.remove('over'));
  it.classList.add('over');
  const parent = it.parentElement;
  const rect = it.getBoundingClientRect();
  const after = (e.clientY - rect.top) > rect.height / 2;
  parent.insertBefore(window._dndEl, after ? it.nextSibling : it);
  window._dndEl.classList.add('drag');
});
document.addEventListener('dragend', () => {
  $$('.dnd-i').forEach(x => x.classList.remove('drag', 'over'));
  $$('.dnd-i .dnd-no').forEach((n, i) => n.textContent = i + 1);
  window._dndEl = null;
});
document.addEventListener('drop', e => e.preventDefault());

/* 基于 transition 的动画重播：先瞬时复位（禁用过渡），再下一帧进入，
   否则「移除→立刻加回」会在同一帧内抵消，肉眼看不出任何变化 */
function replayTransition(el, cls) {
  if (!el) return;
  /* 帧 0（同步）：关掉过渡 → 移除目标类 → 强制重算，让“隐藏态”以无过渡方式落定 */
  el.classList.add('no-tr');
  el.classList.remove(cls);
  void el.getBoundingClientRect().width;
  /* 帧 1：恢复过渡（此刻渲染基线已是隐藏态，且没有任何属性变化） */
  requestAnimationFrame(() => {
    el.classList.remove('no-tr');
    /* 帧 2：再加回目标类 → 属性从隐藏态开始真正过渡 */
    requestAnimationFrame(() => el.classList.add(cls));
  });
}

/* ---------- 滚动家族：联动 / 触发 / 视差 / 横向画廊 / 拖尾 ---------- */
function bindScrollFX(root = document) {
  /* 滚动联动显现：进度 = 条目相对容器可视区的位置（连续可逆） */
  $$('[data-sdr]', root).forEach(box => {
    const rows = $$('.sdr-row', box);
    const upd = () => {
      const br = box.getBoundingClientRect();
      rows.forEach(r => {
        const rr = r.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (br.bottom - rr.top - 8) / 42));
        r.style.opacity = (0.1 + 0.9 * p).toFixed(3);
        r.style.transform = `translateY(${((1 - p) * 22).toFixed(1)}px)`;
      });
    };
    box.addEventListener('scroll', upd, { passive: true });
    upd();
  });
  /* 滚动触发：越过阈值 fire-once */
  $$('[data-strig]', root).forEach(box => {
    const tg = box.querySelector('.strig-target');
    box.addEventListener('scroll', () => {
      if (box.scrollTop > 54 && tg) tg.classList.add('fired');
    }, { passive: true });
  });
  /* 视差滚动：各层按速率差位移 */
  $$('[data-splx]', root).forEach(box => {
    const bg = box.querySelector('[data-sdepth]');
    const chip = box.querySelector('[data-sdepth2]');
    box.addEventListener('scroll', () => {
      const st = box.scrollTop;
      if (bg) bg.style.transform = `translateY(${(-st * 0.42).toFixed(1)}px)`;
      if (chip) chip.style.transform = `translateY(${(-st * 0.12).toFixed(1)}px)`;
    }, { passive: true });
  });
  /* 横向画廊：中心聚焦 + 拖拽横滚 */
  $$('[data-hgal]', root).forEach(gal => {
    const tiles = $$('.hg-t', gal);
    const upd = () => {
      const gr = gal.getBoundingClientRect();
      const cx = gr.left + gr.width / 2;
      tiles.forEach(t => {
        const tr = t.getBoundingClientRect();
        const p = Math.max(0, 1 - Math.abs((tr.left + tr.width / 2) - cx) / (gr.width / 2));
        t.style.transform = `scale(${(0.86 + 0.14 * p).toFixed(3)})`;
        t.style.opacity = (0.42 + 0.58 * p).toFixed(3);
      });
    };
    gal.addEventListener('scroll', upd, { passive: true });
    let down = false, sx = 0, sl = 0;
    gal.addEventListener('pointerdown', e => {
      down = true; sx = e.clientX; sl = gal.scrollLeft;
      gal.classList.add('grabbing');
      try { gal.setPointerCapture(e.pointerId); } catch (err) {}
    });
    gal.addEventListener('pointermove', e => { if (down) gal.scrollLeft = sl - (e.clientX - sx); });
    const up = () => { down = false; gal.classList.remove('grabbing'); };
    gal.addEventListener('pointerup', up);
    gal.addEventListener('pointercancel', up);
    upd();
  });
  /* 光标拖尾 */
  $$('[data-trail]', root).forEach(z => {
    z.addEventListener('pointermove', e => {
      const now = performance.now();
      if (now - (z._lt || 0) < 34) return;
      z._lt = now;
      const r = z.getBoundingClientRect();
      const d = document.createElement('span');
      d.className = 'trail-dot';
      d.style.left = (e.clientX - r.left) + 'px';
      d.style.top = (e.clientY - r.top) + 'px';
      z.appendChild(d);
      setTimeout(() => d.remove(), 640);
    });
  });
}

/* ---------- 补全批次三：输入类与场景类绑定 ---------- */
function bindExtraFX(root = document) {
  /* 点击容器空白处即聚焦内部输入（浮动标签 / 密码框 / 组合输入） */
  $$('.fld, .pw, .igroup', root).forEach(box => {
    box.addEventListener('click', e => {
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.closest('button')) return;
      const inp = box.querySelector('input, textarea');
      if (inp) inp.focus();
    });
  });
  /* OTP 自动跳格 */
  $$('[data-otp]', root).forEach(box => {
    const ins = $$('input', box);
    ins.forEach((inp, i) => {
      inp.addEventListener('input', () => {
        inp.classList.toggle('filled', !!inp.value);
        if (inp.value && ins[i + 1]) ins[i + 1].focus();
      });
      inp.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !inp.value && ins[i - 1]) ins[i - 1].focus();
      });
    });
  });
  /* 密码强度 */
  $$('[data-pwr-input]', root).forEach(inp => {
    const box = inp.closest('.pwr');
    const fill = box.querySelector('[data-pwr-fill]');
    const lab = box.querySelector('[data-pwr-lab]');
    inp.addEventListener('input', () => {
      const v = inp.value;
      let s = 0;
      if (v.length >= 8) s++;
      if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
      if (/\d/.test(v)) s++;
      if (/[^A-Za-z0-9]/.test(v)) s++;
      const map = [[0, 'var(--dgr)', '—'], [25, 'var(--dgr)', '太弱'], [50, 'var(--warn)', '一般'], [75, 'var(--acc)', '较强'], [100, 'var(--ok)', '很强']];
      const [pct, color, text] = map[v ? s : 0];
      fill.style.width = pct + '%';
      fill.style.background = color;
      lab.textContent = v ? text : '—';
      lab.style.color = v ? color : '';
    });
  });
  /* 双头滑块 */
  $$('[data-drng]', root).forEach(box => {
    const a = box.querySelector('[data-dr-a]'), b = box.querySelector('[data-dr-b]');
    const fill = box.querySelector('[data-dr-fill]');
    const labs = box.querySelectorAll('.dr-lab span');
    const upd = () => {
      let lo = +a.value, hi = +b.value;
      if (lo > hi) { [lo, hi] = [hi, lo]; }
      fill.style.left = (lo / 10) + '%';
      fill.style.width = ((hi - lo) / 10) + '%';
      labs[0].textContent = '¥ ' + lo;
      labs[1].textContent = '¥ ' + hi;
    };
    a.addEventListener('input', upd); b.addEventListener('input', upd);
    upd();
  });
  /* 自动补全 */
  $$('[data-cmb-input]', root).forEach(inp => {
    const list = inp.closest('.cmb').querySelector('[data-cmb-list]');
    const items = $$('[data-cmb-i]', list);
    const empty = document.createElement('div');
    empty.className = 'cmb-empty';
    empty.textContent = '无匹配结果';
    empty.style.display = 'none';
    list.appendChild(empty);
    inp.addEventListener('input', () => {
      const kw = inp.value.trim();
      let n = 0;
      items.forEach(b => {
        const hit = !kw || b.textContent.includes(kw);
        b.style.display = hit ? '' : 'none';
        if (hit) n++;
      });
      empty.style.display = n ? 'none' : '';
    });
    items.forEach(b => b.addEventListener('click', () => { inp.value = b.textContent; }));
  });
  /* 锚点导航 */
  $$('[data-anchor]', root).forEach(nav => {
    const row = nav.closest('.anch-row') || nav.parentElement;
    const body = row.querySelector('[data-anchor-body]');
    const secs = $$('.anch-sec', body);
    const btns = $$('[data-anchor-to]', nav);
    if (!body) return;
    const upd = () => {
      const bt = body.getBoundingClientRect().top;
      let cur = 0;
      secs.forEach((s, i) => { if (s.getBoundingClientRect().top - bt < 46) cur = i; });
      btns.forEach((b, i) => b.classList.toggle('on', i === cur));
    };
    body.addEventListener('scroll', upd, { passive: true });
    btns.forEach((b, i) => b.addEventListener('click', () => {
      secs[i].scrollIntoView({ block: 'start', behavior: 'smooth' });
    }));
    upd();
  });
  /* 数字时钟（支持多实例） */
  $$('[data-clock]', root).forEach(clk => {
    if (clk.dataset.run) return;
    clk.dataset.run = '1';
    const tick = () => {
      if (!document.contains(clk)) return;
      const d = new Date(), p = n => String(n).padStart(2, '0');
      clk.innerHTML = `${p(d.getHours())}<i>:</i>${p(d.getMinutes())}<i>:</i>${p(d.getSeconds())}`;
      const dt = $('[data-clock-date]');
      if (dt) dt.textContent = `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日 · 周${'日一二三四五六'[d.getDay()]}`;
    };
    tick();
    setInterval(tick, 1000);
  });
  /* 任务清单联动 */
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.matches && t.matches('.task-i input')) {
      const box = t.closest('[data-task]');
      if (!box) return;
      const all = box.querySelectorAll('input');
      const done = box.querySelectorAll('input:checked').length;
      box.querySelector('[data-task-prg]').style.width = (done / all.length * 100) + '%';
      box.querySelector('[data-task-count]').textContent = `${done} / ${all.length}`;
    }
  });
  /* 粒子星野 */
  $$('[data-particles]', root).forEach(cv => {
    const ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    const W = cv.width, H = cv.height;
    const ps = Array.from({ length: 44 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      a: Math.random() * 0.5 + 0.25, ph: Math.random() * Math.PI * 2
    }));
    (function step() {
      if (!document.contains(cv)) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy; p.ph += 0.035;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const a = Math.max(0.08, p.a + Math.sin(p.ph) * 0.22);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185,198,255,${a.toFixed(3)})`;
        ctx.fill();
      }
      requestAnimationFrame(step);
    })();
  });
  /* 文字模糊切换 */
  $$('[data-swaptext]', root).forEach(box => {
    if (box.dataset.run) return;
    box.dataset.run = '1';
    const items = $$('b', box);
    let i = 0;
    setInterval(() => {
      if (!document.contains(box) || items.length < 2) return;
      items[i].classList.remove('inb'); items[i].classList.add('out');
      i = (i + 1) % items.length;
      items[i].classList.remove('out'); items[i].classList.add('inb');
    }, 2800);
  });
  /* 选择工具条 */
  const bar = $('[data-sel-bar]');
  if (bar) {
    document.addEventListener('selectionchange', () => {
      const sel = document.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { bar.classList.remove('show'); return; }
      const wrap = $('[data-seltool]');
      const node = sel.anchorNode;
      if (!wrap || !node || !wrap.contains(node)) { bar.classList.remove('show'); return; }
      const r = sel.getRangeAt(0).getBoundingClientRect();
      const wr = wrap.getBoundingClientRect();
      bar.classList.add('show');
      const bw = bar.offsetWidth;
      let left = r.left - wr.left + r.width / 2 - bw / 2;
      left = Math.max(6, Math.min(wr.width - bw - 6, left));
      bar.style.left = left + 'px';
      bar.style.top = Math.max(4, r.top - wr.top - 42) + 'px';
    });
  }
}

/* ---------- 局部播放器（整页场景演示） ---------- */
function fpSetIcons(ov, playing) {
  $$('[data-fp-toggle]', ov).forEach(b => { b.textContent = playing ? '⏸' : '▶'; });
}
function fpPlay(ov) {
  if (ov._iv) return;
  ov._player = ov.querySelector('.fp-player');
  ov._player.classList.add('playing');
  const fill = ov.querySelector('[data-fp-fill]');
  const time = ov.querySelector('[data-fp-time]');
  if (ov._t == null) ov._t = 0;
  ov._iv = setInterval(() => {
    ov._t = (ov._t + 0.25) % 30.01;
    fill.style.width = (ov._t / 30 * 100) + '%';
    time.textContent = `0:${String(Math.floor(ov._t)).padStart(2, '0')} / 0:30`;
  }, 250);
  fpSetIcons(ov, true);
}
function fpToggle(ov) {
  if (ov._iv) fpClose(ov, true);
  else fpPlay(ov);
}
function fpClose(ov, keepOpen) {
  clearInterval(ov._iv);
  ov._iv = null;
  const pl = ov.querySelector('.fp-player');
  if (pl) pl.classList.remove('playing');
  fpSetIcons(ov, false);
  if (!keepOpen) {
    ov.classList.remove('show');
    ov._t = 0;
    const fill = ov.querySelector('[data-fp-fill]');
    const time = ov.querySelector('[data-fp-time]');
    if (fill) fill.style.width = '0%';
    if (time) time.textContent = '0:00 / 0:30';
  }
}
function fxDownload(btn) {
  btn.dataset.busy = '1';
  const orig = btn.textContent.trim();
  btn.dataset.orig = orig;
  btn.classList.add('fxdl', 'busy');
  btn.innerHTML = `<span class="fxd-p"></span><span class="fxd-t">${orig}</span>`;
  const fill = btn.querySelector('.fxd-p');
  const txt = btn.querySelector('.fxd-t');
  let p = 0;
  const iv = setInterval(() => {
    p += 7;
    const v = Math.min(100, p);
    fill.style.width = v + '%';
    txt.textContent = v >= 100 ? '✓ 下载完成' : `下载中 ${v}%`;
    if (v >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        btn.classList.remove('busy');
        fill.style.width = '0%';
        txt.textContent = orig;
        btn.classList.remove('fxdl');
        btn.innerHTML = orig;
        delete btn.dataset.busy;
      }, 1700);
    }
  }, 85);
}
/* ---------- 聚光灯引导 ---------- */
const SPOT_STEPS = [
  { sel: '[data-spot-t="0"]', title: '入口设置', desc: '这里集中了该模块的全部偏好开关，先认识它。' },
  { sel: '[data-spot-t="1"]', title: '先筛选范围', desc: '缩小对象再操作，是桌面效率的第一原则。' },
  { sel: '[data-spot-t="2"]', title: '最后保存', desc: '确认无误后一键保存，改动立即生效。' }
];
function spotGo(card, i) {
  const spot = card.querySelector('[data-spot]');
  if (!spot) return;
  if (i >= SPOT_STEPS.length) { spotEnd(card); return; }
  card._spotI = i;
  const step = SPOT_STEPS[i];
  const target = spot.querySelector(step.sel);
  const ring = spot.querySelector('[data-spot-ring]');
  const tip = spot.querySelector('[data-spot-card]');
  const sr = spot.getBoundingClientRect();
  const tr = target.getBoundingClientRect();
  const pad = 8;
  const x = tr.left - sr.left - pad, y = tr.top - sr.top - pad;
  ring.classList.add('on');
  ring.style.left = x + 'px';
  ring.style.top = y + 'px';
  ring.style.width = (tr.width + pad * 2) + 'px';
  ring.style.height = (tr.height + pad * 2) + 'px';
  tip.querySelector('[data-spot-title]').textContent = step.title;
  tip.querySelector('[data-spot-desc]').textContent = step.desc;
  tip.querySelector('[data-spot-idx]').textContent = `${i + 1} / ${SPOT_STEPS.length}`;
  tip.querySelector('[data-spot-next]').textContent = (i === SPOT_STEPS.length - 1) ? '完成' : '下一步';
  tip.classList.add('on');
  const th = tip.offsetHeight || 130, tw = tip.offsetWidth || 200;
  let cy = y + tr.height + pad * 2 + 12;
  if (cy + th > sr.height - 6) cy = Math.max(6, y - th - 12);
  const cx = Math.min(Math.max(6, x), sr.width - tw - 6);
  tip.style.left = cx + 'px';
  tip.style.top = cy + 'px';
}
function spotEnd(card) {
  const spot = card.querySelector('[data-spot]');
  if (!spot) return;
  spot.querySelector('[data-spot-ring]').classList.remove('on');
  spot.querySelector('[data-spot-card]').classList.remove('on');
  card._spotI = -1;
}

/* ---------- 圆环倒计时 ---------- */
function timerRun(el) {
  if (!el || el._run) return;
  el._run = 1;
  const fg = el.querySelector('.rt-fg');
  const tx = el.querySelector('[data-timer-tx]');
  const total = 345;
  let left = 10;
  fg.style.strokeDashoffset = 0;
  tx.textContent = left + 's';
  el._iv = setInterval(() => {
    left--;
    tx.textContent = Math.max(0, left) + 's';
    fg.style.strokeDashoffset = total * (1 - left / 10);
    if (left <= 0) { clearInterval(el._iv); el._run = 0; }
  }, 950);
}

/* ---------- 文件资源管理器数据与渲染 ---------- */
const FX_DATA = {
  src: [['📄', 'index.html', '4 KB'], ['📄', 'app.js', '54 KB'], ['📄', 'data.js', '86 KB'], ['📁', 'components', '—']],
  assets: [['🖼', 'og-cover.png', '240 KB'], ['🎨', 'palette.json', '2 KB'], ['📦', 'icons.zip', '1.1 MB']],
  root: [['📁', 'src', '—'], ['📁', 'assets', '—'], ['📄', 'package.json', '1 KB'], ['📄', 'README.md', '6 KB']]
};
function renderFx(box, key) {
  box.querySelector('[data-fx-addr]').textContent = key === 'root' ? '项目根目录' : key;
  const list = box.querySelector('[data-fx-list]');
  const rows = FX_DATA[key] || [];
  list.innerHTML = rows.length
    ? rows.map(r => `<div class="fx-row"><span>${r[0]}</span><span>${r[1]}</span><span class="fx-sz">${r[2]}</span></div>`).join('')
    : '<div class="fx-empty">空文件夹</div>';
}

/* ---------- 级联选择 / 穿梭框 / 栅格 ---------- */
const CASC_MAP = {
  浙江: ['杭州', '宁波', '温州', '绍兴'],
  江苏: ['南京', '苏州', '无锡', '常州'],
  广东: ['广州', '深圳', '东莞', '佛山']
};
function renderCascCities(casc, prov) {
  const col = casc.querySelector('[data-casc-c]');
  col.innerHTML = (CASC_MAP[prov] || []).map(c =>
    `<button data-casc-city="${c}">${c}</button>`).join('');
}
function tfMove(box, dir) {
  const cols = $$('.tf-col', box);
  const from = dir === 'r' ? cols[0] : cols[1];
  const to = dir === 'r' ? cols[1] : cols[0];
  const checked = $$('input[data-tf-item]', from).filter(c => c.checked);
  if (!checked.length) { showToast('请先勾选条目', null, 'info'); return; }
  checked.forEach(c => {
    const lab = c.closest('.tf-i');
    lab.querySelector('input').checked = false;
    to.appendChild(lab);
  });
  box.querySelector('[data-tf-nl]').textContent = $$('input[data-tf-item]', cols[0]).length;
  box.querySelector('[data-tf-nr]').textContent = $$('input[data-tf-item]', cols[1]).length;
}
function renderGrid(g, n) {
  g.dataset.cols = n;
  g.innerHTML = Array.from({ length: n }, (_, i) =>
    `<i style="animation-delay:${(i * 0.03).toFixed(2)}s"></i>`).join('');
}

/* ---------- 终端脚本 ---------- */
function termRun(el) {
  if (!el || el.dataset.run) return;
  el.dataset.run = '1';
  const lines = [
    ['t-cmd', '$ npm run build'],
    ['t-dim', 'vite v5.2.0 building for production…'],
    ['t-dim', 'transforming (149) modules…'],
    ['t-ok', '✓ 149 modules transformed'],
    ['t-dim', 'dist/index.html   4.2 kB │ gzip: 1.8 kB'],
    ['t-ok', '✓ built in 1.12s'],
    ['t-cmd', '$ ']
  ];
  let i = 0;
  el.innerHTML = '';
  const tick = () => {
    if (!document.contains(el)) return;
    if (i >= lines.length) {
      setTimeout(() => { if (document.contains(el)) { el.innerHTML = ''; i = 0; tick(); } }, 2200);
      return;
    }
    const div = document.createElement('div');
    div.className = lines[i][0];
    div.textContent = lines[i][1];
    if (i === lines.length - 1) div.innerHTML = '$ <span class="t-cur"></span>';
    el.appendChild(div);
    i++;
    setTimeout(tick, i === 1 ? 500 : 620);
  };
  tick();
}

/* ---------- 桌面交互绑定 ---------- */
function bindDesktopFX(root = document) {
  /* 菜单栏：展开后横向切换 */
  $$('.menubar').forEach(mb => {
    mb.addEventListener('mouseover', e => {
      if (!e.target.closest('[data-mb-t]')) return;
      if (!$('.mb-g.open', mb)) return;
      $$('.mb-g.open', mb).forEach(x => x.classList.remove('open'));
      e.target.closest('.mb-g').classList.add('open');
    });
  });
  /* 窗口拖动 */
  $$('[data-win]', root).forEach(win => {
    const bar = win.querySelector('[data-win-bar]');
    const stage = win.closest('.stage');
    let sx = 0, sy = 0, ox = 0, oy = 0, wW = 0, wH = 0, buL = 0, buT = 0, sr = null, dragging = false;
    bar.addEventListener('pointerdown', e => {
      dragging = true;
      win.classList.remove('snap');
      bar.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY;
      const m = /translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(win.style.transform || '');
      ox = m ? +m[1] : 0; oy = m ? +m[2] : 0;
      sr = stage.getBoundingClientRect();
      const wr = win.getBoundingClientRect();
      buL = wr.left - ox; buT = wr.top - oy;
      wW = wr.width; wH = wr.height;
    });
    bar.addEventListener('pointermove', e => {
      if (!dragging) return;
      let nx = ox + e.clientX - sx, ny = oy + e.clientY - sy;
      nx = Math.max(sr.left + 2 - buL, Math.min(sr.right - wW - 2 - buL, nx));
      ny = Math.max(sr.top + 2 - buT, Math.min(sr.bottom - wH - 2 - buT, ny));
      win.style.transform = `translate(${nx.toFixed(1)}px,${ny.toFixed(1)}px)`;
    });
    const end = () => { dragging = false; };
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
    bar.addEventListener('dblclick', () => {
      win.classList.add('snap');
      win.style.transform = '';
    });
  });
  /* 可调列宽 */
  $$('[data-rtbl]', root).forEach(tbl => {
    const cols = $$('col', tbl.querySelector('colgroup'));
    $$('[data-rt-h]', tbl).forEach((h, hi) => {
      if (!cols[hi]) return;
      h.addEventListener('pointerdown', e => {
        e.preventDefault();
        h.classList.add('drag');
        h.setPointerCapture(e.pointerId);
        const startX = e.clientX;
        const startW = cols[hi].getBoundingClientRect().width;
        const move = ev => {
          const w = Math.max(64, startW + (ev.clientX - startX));
          cols[hi].style.width = w + 'px';
        };
        const up = () => {
          h.classList.remove('drag');
          h.removeEventListener('pointermove', move);
          h.removeEventListener('pointerup', up);
        };
        h.addEventListener('pointermove', move);
        h.addEventListener('pointerup', up);
      });
    });
  });
  /* 行选择表格 */
  $$('[data-seltbl]', root).forEach(wrap => {
    const all = wrap.querySelector('[data-st-all]');
    const rows = $$('[data-st-row]', wrap);
    const bar = wrap.querySelector('[data-st-bar]');
    const nOut = wrap.querySelector('[data-st-n]');
    const sync = () => {
      const n = rows.filter(r => r.checked).length;
      nOut.textContent = n;
      bar.classList.toggle('show', n > 0);
      all.checked = n === rows.length && n > 0;
      all.indeterminate = n > 0 && n < rows.length;
    };
    all.addEventListener('change', () => {
      rows.forEach(r => { r.checked = all.checked; });
      sync();
    });
    rows.forEach(r => r.addEventListener('change', sync));
  });
  /* 分割面板 */
  $$('[data-split]', root).forEach(sp => {
    const div = sp.querySelector('[data-sp-div]');
    let dragging = false;
    div.addEventListener('pointerdown', e => {
      dragging = true; div.classList.add('drag');
      div.setPointerCapture(e.pointerId);
    });
    div.addEventListener('pointermove', e => {
      if (!dragging) return;
      const r = sp.getBoundingClientRect();
      const p = Math.max(20, Math.min(70, ((e.clientX - r.left) / r.width) * 100));
      sp.style.setProperty('--l', p.toFixed(1) + '%');
    });
    const end = () => { dragging = false; div.classList.remove('drag'); };
    div.addEventListener('pointerup', end);
    div.addEventListener('pointercancel', end);
  });
  /* 虚拟列表 */
  $$('[data-vlist]', root).forEach(vl => {
    const n = +vl.dataset.vn || 1000;
    const rowH = 34, overscan = 3;
    const spacer = vl.querySelector('[data-v-sp]');
    const win = vl.querySelector('[data-v-win]');
    spacer.style.height = (n * rowH) + 'px';
    const render = () => {
      const start = Math.max(0, Math.floor(vl.scrollTop / rowH) - overscan);
      const end = Math.min(n, Math.ceil((vl.scrollTop + vl.clientHeight) / rowH) + overscan);
      let html = '';
      for (let i = start; i < end; i++) {
        html += `<div class="vl-r" style="top:${i * rowH}px"><b>#${i + 1}</b><span>虚拟行内容 · Row ${i + 1}</span></div>`;
      }
      win.innerHTML = html;
    };
    vl.addEventListener('scroll', render, { passive: true });
    render();
  });
  /* 终端 */
  $$('[data-term]', root).forEach(termRun);
  /* 状态栏时间 */
  $$('[data-st-time]', root).forEach(el => {
    if (el.dataset.run) return;
    el.dataset.run = '1';
    const tick = () => {
      if (!document.contains(el)) return;
      const d = new Date(), p = x => String(x).padStart(2, '0');
      el.textContent = p(d.getHours()) + ':' + p(d.getMinutes());
    };
    tick();
    setInterval(tick, 30000);
  });
  /* 文件管理器初始 */
  $$('[data-fx]', root).forEach(box => {
    const on = box.querySelector('[data-fx-t].on') || box.querySelector('[data-fx-t]');
    if (on) renderFx(box, on.dataset.fxT);
  });
  /* 级联选择初始 */
  $$('[data-casc]', root).forEach(c => renderCascCities(c, '浙江'));
  /* 栅格初始 */
  $$('[data-grid12]', root).forEach(g => renderGrid(g, +(g.dataset.cols || 12)));
  /* 文章目录滚动联动 */
  $$('[data-artl]', root).forEach(box => {
    const body = box.querySelector('[data-artl-body]');
    const heads = $$('h4', body);
    const btns = $$('[data-artl-to]', box);
    body.addEventListener('scroll', () => {
      let cur = 0;
      heads.forEach((h, i) => { if (h.offsetTop - body.scrollTop < 48) cur = i; });
      btns.forEach((b, i) => b.classList.toggle('on', i === cur));
    }, { passive: true });
  });
  /* 一屏滚动：导航点跟随 + 阅读进度 + 大屏实时数字 */
  $$('[data-onesite]', root).forEach(site => {
    const dots = $$('[data-os-dot]', site);
    if (!dots.length || site.dataset.osRun) return;
    site.dataset.osRun = '1';
    site.addEventListener('scroll', () => {
      const i = Math.round(site.scrollTop / Math.max(1, site.clientHeight));
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
    }, { passive: true });
  });
  $$('[data-artl-body]', root).forEach(body => {
    if (body.dataset.progRun) return;
    body.dataset.progRun = '1';
    body.addEventListener('scroll', () => {
      const max = Math.max(1, body.scrollHeight - body.clientHeight);
      body.style.setProperty('--prog', ((body.scrollTop / max) * 100).toFixed(1) + '%');
    }, { passive: true });
  });
  $$('[data-live]', root).forEach(el => {
    if (el.dataset.lvRun) return;
    el.dataset.lvRun = '1';
    const fmt = v => {
      const f = el.dataset.fmt;
      if (f === 'k') return v.toFixed(1) + 'k';
      if (f === 'pct') return Math.round(v) + '%';
      if (f === 'money') return '¥' + Math.round(v) + 'k';
      return Math.round(v).toLocaleString('en-US');
    };
    setInterval(() => {
      if (!document.contains(el)) return;
      let v = +el.dataset.v;
      v = v * (1 + (Math.random() - 0.5) * 0.035);
      el.dataset.v = v;
      el.textContent = fmt(v);
      el.classList.remove('live-flash');
      void el.offsetWidth;
      el.classList.add('live-flash');
    }, 2400);
  });
  /* 快捷键过滤 */
  $$('[data-cheat]', root).forEach(box => {
    const inp = box.querySelector('.cheat-f');
    const rows = $$('[data-cheat-r]', box);
    const empty = document.createElement('div');
    empty.className = 'cheat-r cheat-empty';
    empty.textContent = '无匹配的快捷键';
    empty.style.display = 'none';
    box.querySelector('[data-cheat-list]').appendChild(empty);
    inp.addEventListener('input', () => {
      const kw = inp.value.trim().toLowerCase();
      let n = 0;
      rows.forEach(r => {
        const hit = !kw || r.textContent.toLowerCase().includes(kw);
        r.classList.toggle('hide', !hit);
        if (hit) n++;
      });
      empty.style.display = n ? 'none' : '';
    });
  });
  /* 主从视图淡入 */
  $$('.md-detail').forEach(d => { d.style.transition = 'opacity .3s var(--ease)'; });
  /* 内联编辑 */
  document.addEventListener('dblclick', e => {
    const td = e.target.closest && e.target.closest('td[data-edit]');
    if (!td || td.classList.contains('editing')) return;
    const old = td.textContent;
    td.classList.add('editing');
    td.innerHTML = `<input value="${old.replace(/"/g, '&quot;')}">`;
    const inp = td.querySelector('input');
    inp.focus();
    inp.select();
    const commit = okc => {
      const val = inp.value.trim();
      td.classList.remove('editing');
      td.textContent = okc && val ? val : old;
      if (okc && val && val !== old) showToast('单元格已更新为「' + val + '」', '内联编辑');
    };
    inp.addEventListener('keydown', ev => {
      if (ev.key === 'Enter') commit(true);
      else if (ev.key === 'Escape') commit(false);
    });
    inp.addEventListener('blur', () => { if (td.classList.contains('editing')) commit(true); });
  });
  /* 弹性网格：指针点亮 + 邻居延迟 */
  $$('[data-hgrid]', root).forEach(grid => {
    const cells = $$('i', grid);
    const cols = 6;
    grid.addEventListener('pointerover', e => {
      const cell = e.target.closest('i');
      if (!cell) return;
      const idx = cells.indexOf(cell);
      const r = idx % cols, c = Math.floor(idx / cols);
      cells.forEach((el, i) => {
        const rr = i % cols, cc = Math.floor(i / cols);
        const d = Math.abs(rr - r) + Math.abs(cc - c);
        if (d > 2) return;
        el.classList.add('lit');
        setTimeout(() => el.classList.remove('lit'), 260 + d * 160);
      });
    });
  });
  /* 词条翻转 */
  $$('[data-wflip]', root).forEach(box => {
    if (box.dataset.run) return;
    box.dataset.run = '1';
    const words = ['组件', '动效', '布局', '交互', '桌面'];
    let i = 1;
    const cur = box.querySelector('.wf-cur'), next = box.querySelector('.wf-next');
    setInterval(() => {
      if (!document.contains(box)) return;
      box.classList.add('flip');
      setTimeout(() => {
        cur.textContent = next.textContent;
        i = (i + 1) % words.length;
        next.textContent = words[i];
        box.classList.remove('flip');
        void box.offsetWidth;
      }, 560);
    }, 2300);
  });
  /* 蹦极拉伸 */
  $$('[data-tether]', root).forEach(zone => {
    const ball = zone.querySelector('[data-td-ball]');
    let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
    ball.addEventListener('pointerdown', e => {
      dragging = true;
      ball.classList.remove('snap');
      ball.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY;
      const m = /translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(ball.style.transform || '');
      ox = m ? +m[1] : 0; oy = m ? +m[2] : 0;
    });
    ball.addEventListener('pointermove', e => {
      if (!dragging) return;
      const dx = ox + e.clientX - sx, dy = oy + e.clientY - sy;
      const dist = Math.min(90, Math.hypot(dx, dy));
      const a = Math.atan2(dy, dx);
      const stretch = 1 + dist / 160;
      ball.style.transform = `translate(${dx}px,${dy}px) rotate(${a}rad) scale(${stretch.toFixed(3)},${(1 - dist / 500).toFixed(3)})`;
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      ball.classList.add('snap');
      ball.style.transform = '';
    };
    ball.addEventListener('pointerup', end);
    ball.addEventListener('pointercancel', end);
  });
  /* 墨滴扩散 */
  $$('[data-ink]', root).forEach(zone => {
    zone.addEventListener('click', e => {
      const r = zone.getBoundingClientRect();
      const d = document.createElement('span');
      d.className = 'ink-drop';
      d.style.left = (e.clientX - r.left) + 'px';
      d.style.top = (e.clientY - r.top) + 'px';
      d.style.width = d.style.height = (30 + Math.random() * 26) + 'px';
      zone.appendChild(d);
      d.addEventListener('animationend', () => d.remove());
    });
  });
}

/* ---------- 开屏引导卡片 ---------- */
function onbGo(card, i) {
  const track = card.querySelector('[data-onb-track]');
  if (!track) return;
  const n = track.children.length;
  i = ((i % n) + n) % n;
  card._onb = i;
  track.style.transform = `translateX(-${i * 100}%)`;
  card.querySelectorAll('[data-onb-dot]').forEach((d, k) => d.classList.toggle('on', k === i));
  const next = card.querySelector('[data-onb-next]');
  if (next) next.textContent = i === n - 1 ? '开始使用' : '继续';
}

/* ---------- 日历渲染（迷你日历与日期选择器共用） ---------- */
function renderCal(cal) {
  const y = +cal.dataset.y, m = +cal.dataset.m;
  const label = cal.querySelector('[data-cal-label]');
  if (label) label.textContent = `${y} 年 ${m + 1} 月`;
  const grid = cal.querySelector('.cal-grid');
  if (!grid) return;
  const W = ['一', '二', '三', '四', '五', '六', '日'];
  let html = W.map(w => `<span class="cw">${w}</span>`).join('');
  const lead = (new Date(y, m, 1).getDay() + 6) % 7;
  const prevDays = new Date(y, m, 0).getDate();
  for (let i = lead; i > 0; i--) html += `<span class="dim">${prevDays - i + 1}</span>`;
  const days = new Date(y, m + 1, 0).getDate();
  const now = new Date();
  const sel = cal.dataset.sel ? +cal.dataset.sel : 0;
  for (let d = 1; d <= days; d++) {
    let cls = '';
    if (y === now.getFullYear() && m === now.getMonth() && d === now.getDate()) cls += ' today';
    if (sel === d) cls += ' sel';
    html += `<span class="${cls.trim()}" data-day="${d}">${d}</span>`;
  }
  const rest = (7 - ((lead + days) % 7)) % 7;
  for (let i = 1; i <= rest; i++) html += `<span class="dim">${i}</span>`;
  grid.innerHTML = html;
}

/* ---------- 界面术语图联动 ---------- */
function setAnat(card, id) {
  if (!card) return;
  card.querySelectorAll('[data-anat-zone]').forEach(z => z.classList.toggle('on', z.dataset.anatZone === id));
  const row = card.querySelector(`[data-anat-row="${id}"]`);
  card.querySelectorAll('.anat-row').forEach(r => r.classList.toggle('on', r === row));
  const det = card.querySelector('[data-anat-detail]');
  if (row && det) det.innerHTML = `<b>${row.dataset.cn}<i>${row.dataset.en}</i></b><p>${row.dataset.desc}</p>`;
}

/* ---------- 打字机 ---------- */
function startTyper(el) {
  if (el.dataset.run) return;
  el.dataset.run = '1';
  const lines = ['const idea = "你的下一个产品";', '// 从组件库开始搭建界面', 'npm create liquid-glass@latest'];
  let li = 0, ci = 0, del = false;
  (function tick() {
    if (!document.contains(el)) return;
    const text = lines[li];
    if (!del) {
      ci++;
      el.textContent = text.slice(0, ci);
      if (ci === text.length) { del = true; return setTimeout(tick, 1600); }
      setTimeout(tick, 78);
    } else {
      ci--;
      el.textContent = text.slice(0, ci);
      if (ci === 0) { del = false; li = (li + 1) % lines.length; return setTimeout(tick, 340); }
      setTimeout(tick, 36);
    }
  })();
}

/* ---------- 评价轮播 ---------- */
function setTesti(car, i, manual) {
  const cards = $$('.tcard', car), dots = $$('.t-dots button', car);
  cards.forEach((c, k) => c.classList.toggle('on', k === i));
  dots.forEach((d, k) => d.classList.toggle('on', k === i));
  car._i = i;
  if (manual && car._t) { clearInterval(car._t); car._t = null; startTesti(car); }
}
function startTesti(car) {
  if (car._t) return;
  car._t = setInterval(() => {
    if (document.hidden) return;
    setTesti(car, ((car._i || 0) + 1) % $$('.tcard', car).length);
  }, 4200);
}

/* ---------- 沉浸演示 ---------- */
let imxItem = null;
function openImx(card) {
  const it = card && card._item;
  if (!it) return;
  imxItem = it;
  lastFocus = document.activeElement;
  $('#imxTitle').textContent = it.n;
  $('#imxEn').textContent = it.en || '';
  $('#imxK').textContent = it.k || '';
  $('#imxDesc').textContent = it.d || '';
  const cat = DATA.find(c => c.items.includes(it));
  $('#imxCat').textContent = cat ? cat.name + ' · ' + cat.en : '';
  const body = $('#imxBody');
  body.innerHTML = `<div class="stage imx-stage">${it.h}</div>`;
  $('#imxMask').classList.add('show');
  document.body.style.overflow = 'hidden';
  initImx(body);
}
function initImx(root) {
  prepDynamic(root);
  bindPointerFX(root);
  bindScrollFX(root);
  bindExtraFX(root);
  bindDesktopFX(root);
  $$('.stag', root).forEach(el => el.classList.add('go'));
  $$('.rev-list', root).forEach(el => el.classList.add('rev-in'));
  $$('.tl,.ring,.bars,.lchart,.pdraw,.blr,.donut,.gauge', root).forEach(el => el.classList.add('in'));
  $$('[data-count]', root).forEach(countUp);
  $$('[data-prg]', root).forEach(f => { f.style.width = f.dataset.prg + '%'; });
  $$('.bar i[data-h]', root).forEach(b => { b.style.height = b.dataset.h + '%'; });
  positionAllInks(root);
  $$('[data-typer]', root).forEach(startTyper);
  $$('[data-cal]', root).forEach(renderCal);
  $$('[data-onb]', root).forEach(el => onbGo(el.closest('.stage') || root, 0));
  $$('.tcar', root).forEach(startTesti);
  if (root.querySelector('.anat-row')) setAnat(root, '1');
}
function closeImx() {
  const mask = $('#imxMask');
  if (!mask.classList.contains('show')) return;
  mask.classList.remove('show');
  $('#imxBody').innerHTML = '';
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

/* ---------- 启动 ---------- */
function boot() {
  render();
  initObservers();
  initCardScrollReveal();
  initSpy();
  bindPointerFX();
  bindScrollFX();
  bindExtraFX();
  bindDesktopFX();
  $$('.tcar').forEach(startTesti);
  $$('[data-cal]').forEach(renderCal);
  $$('[data-typer]').forEach(startTyper);
  $$('[data-onb]').forEach(el => onbGo(el.closest('.stage') || el.parentElement, 0));
  const anatCard = document.querySelector('.card.wide');
  if (anatCard) setAnat(anatCard, '1');
  setTimeout(() => positionAllInks(), 120);
  window.addEventListener('load', () => positionAllInks());
  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => positionAllInks(), 120); });
}
boot();

