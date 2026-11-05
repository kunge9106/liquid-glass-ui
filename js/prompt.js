/* ============================================================
   prompt.js —— 提示词生成器
   原则：只描述质感、层次、运动意图与状态，
   不写死颜色 / 尺寸等设计令牌；风格由「生成选项」决定。
============================================================ */

/* 当前生成选项（各卡片共享，改动即时同步全部提示词） */
const OPTS = {
  stack: 'React + Tailwind CSS',
  style: 'iOS 液态玻璃',
  theme: '深浅双主题自适应',
  extra: new Set(['完整交互状态'])
};

/* 选项组定义（渲染与生成共用） */
const OPT_GROUPS = [
  { key: 'stack', label: '技术栈', multi: false,
    opts: ['React + Tailwind CSS', 'Vue 3 组合式 API', '原生 HTML / CSS / JS', 'Web Components'] },
  { key: 'style', label: '风格', multi: false,
    opts: ['iOS 液态玻璃', '极简扁平', '新拟态质感', '暗色霓虹'] },
  { key: 'theme', label: '主题', multi: false,
    opts: ['深浅双主题自适应', '仅深色', '仅浅色'] },
  { key: 'extra', label: '附加', multi: true,
    opts: ['完整交互状态', '无障碍访问语义', '移动端触控适配', 'TypeScript 类型', 'GSAP / Framer Motion'] }
];

/* 默认状态覆盖（组件未单独声明时使用） */
const DEF_STATES = [
  '默认 / 悬停 / 按下 / 聚焦 / 禁用五态齐全',
  '聚焦态提供清晰可见的焦点指示，可键盘完成全部操作'
];

/* 生成一份完整提示词 */
function buildPrompt(it) {
  const L = [];
  L.push(`▍组件 · ${it.n}${it.en ? ' / ' + it.en : ''}`);
  L.push('', '▍外观与材质');
  it.v.forEach(s => L.push('· ' + s));
  L.push('', '▍动效与交互');
  it.m.forEach(s => L.push('· ' + s));
  L.push('', '▍状态覆盖');
  (it.s || DEF_STATES).forEach(s => L.push('· ' + s));
  L.push('', '▍生成选项');
  L.push('· 技术栈：' + OPTS.stack);
  L.push('· 风格体系：' + OPTS.style);
  L.push('· 主题处理：' + OPTS.theme);
  L.push('· 附加要求：' + (OPTS.extra.size ? [...OPTS.extra].join('、') : '无'));
  L.push('', '▍生成要求');
  L.push(`依据以上文字描述实现「${it.n}」。描述表达的是质感、层次与运动意图，不是具体参数——色值、字号、间距、圆角等设计令牌由你按所选风格自行推导，并在组件内部保持一致。`);
  L.push('组件需包含完整的交互逻辑与状态切换；按所选技术栈输出可直接运行的代码。');
  return L.join('\n');
}

/* 选项发生变化时，刷新页面上所有已渲染的提示词 */
function refreshAllPrompts() {
  document.querySelectorAll('.card').forEach(card => {
    if (card._item) {
      const pre = card.querySelector('.prompt-pre');
      if (pre && pre.textContent) pre.textContent = buildPrompt(card._item);
    }
  });
}
