/* ============================================================
   data.js —— 组件数据源
   每个组件：n 名称 / d 描述 / h 活演示 HTML
              v 外观描述 / m 动效描述 / s 状态（可选）/ k 动效关键词
   提示词只描述文字细节，不写死颜色与尺寸。
============================================================ */
const DATA = [];
DATA.push({
  id: 'buttons', name: '按钮与操作', en: 'Buttons',
  ic: '<path d="M4 3.5l7.5 16 2.2-6.3L20 11z"/>',
  items: [
    {
      n: '主按钮', en: 'Primary Button', k: '上浮 · 弹簧回弹', 
      d: '承担页面最高优先级的行动入口，通透但不轻浮。',
      h: `<button class="gbtn primary">立即开始</button>`,
      v: ['主体是一块半透明的玻璃胶囊面，能透出下层背景的模糊色彩', '上沿有一道细窄内高光，模拟光线掠过玻璃的边缘', '下方叠一层大范围柔和投影与一层贴近的接触影，形成立体悬浮感'],
      m: ['悬停时整体沿垂直方向轻轻上浮，投影同步拉远、变淡', '按下时下沉并轻微缩放，松开后以带回弹的弹簧曲线复位', '点击可触发自中心扩散的涟漪，增强被按压的实感']
    },
    {
      n: '幽灵按钮', en: 'Ghost Button', k: '描边 · 悬停变色',
      d: '次要操作，靠描边与留白维持安静的存在感。',
      h: `<button class="gbtn ghost">查看详情</button>`,
      v: ['没有填充底色，仅靠一圈细描边勾勒形状', '文字使用次级字色，视觉重量明显低于主按钮'],
      m: ['悬停时描边点亮为主题强调色，同时底部轻微浮起', '描边变色用平滑过渡，不出现生硬的瞬间切换']
    },
    {
      n: '液体填充按钮', en: 'Liquid Fill Button', k: '液面上涨 · 波形边缘',
      d: '悬停时色彩像液体一样从底部涌上来填满按钮。',
      h: `<button class="liq">开始试用</button>`,
      v: ['初始态与幽灵按钮相近：描边 + 极淡底色', '内部藏一层位于可见区域之外的色彩填充层，顶缘呈不规则波形'],
      m: ['悬停时填充层自下而上涌入，顶缘波形在上升过程中逐渐摊平', '文字在液面没过时同步换色，保证任何瞬间都可读', '移出时液面平滑退去，不做反向生硬跳变']
    },
    {
      n: '扫光按钮', en: 'Shimmer Button', k: '高光掠过 · 循环扫光',
      d: '一道斜向高光周期性扫过表面，像玻璃反光。',
      h: `<button class="shine">查看文档</button>`,
      v: ['底面为低对比的玻璃质感，边缘一道细描边', '内部斜置一条透明—亮—透明的高光带，平时停在画面外'],
      m: ['悬停时高光带以匀速从左掠到右，一次约一拍完成', '非悬停状态可按更长周期自动巡游一次，作为轻量吸引', '掠过时按钮本体只做极小幅度的上浮，不喧宾夺主']
    },
    {
      n: '图标按钮', en: 'Icon Button', k: '缩放弹跳 · 状态点脉冲',
      d: '纯图标承载的轻量操作，可携带未读状态点。',
      h: `<div style="display:flex;gap:12px;align-items:center">
        <button class="iconbtn" aria-label="收藏"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20.5s-7.7-4.7-9.6-9.3C1 7.7 3.2 4.5 6.6 4.5c2.2 0 3.9 1.3 5.4 3.3 1.5-2 3.2-3.3 5.4-3.3 3.4 0 5.6 3.2 4.2 6.7-1.9 4.6-9.6 9.3-9.6 9.3z"/></svg></button>
        <button class="iconbtn dot" aria-label="通知"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 9a6 6 0 1 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 15 18 9z"/><path d="M10.3 20a2 2 0 0 0 3.4 0"/></svg></button>
        <button class="iconbtn" aria-label="设置"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg></button>
      </div>`,
      v: ['方形圆角的玻璃容器，图标居中，留出均匀内边距', '可选的未读状态点钉在右上角，带一圈与底色同色的描边环'],
      m: ['悬停时容器向上弹起并轻微放大，图标换为强调色', '按下瞬间快速收缩，松开回弹', '状态点持续做低幅度的呼吸脉冲，提示存在新内容']
    },
    {
      n: '加载按钮', en: 'Loading Button', k: '旋转环 · 成功定格',
      d: '点击后原地进入处理态，完成时定格为成功反馈。',
      h: `<button class="loadbtn" data-loadbtn><span class="lb-txt">保存更改</span><span class="lb-spin"><span class="lb-ring"></span></span></button>`,
      v: ['静止态是一块带渐变与投影的实心操作面，文字居中', '加载态文字淡出，原位出现一个细环旋转指示器', '完成态整体换成成功色，文案替换为结果反馈'],
      m: ['点击后面板保持原尺寸，内容交叉淡入淡出切换为旋转环', '旋转环匀速转动，等待真实请求结束', '完成时环淡出、文案换为成功词，短暂定格后再恢复初始态']
    },
    {
      n: '分段控制器', en: 'Segmented Control', k: '弹性滑块 · 吸附切换',
      d: 'iOS 式的互斥选择，滑块在选项间弹性吸附。',
      h: `<div class="seg" data-seg><span class="seg-ink"></span>
        <button class="seg-btn on" data-seg-t>日</button>
        <button class="seg-btn" data-seg-t>周</button>
        <button class="seg-btn" data-seg-t>月</button></div>`,
      v: ['外层是内凹的玻璃底槽，内含一枚可滑动的选中滑块', '滑块比底槽亮一档，带上沿内高光，像嵌入槽中的实体', '未选中项用次级字色，选中项用主字色'],
      m: ['切换时滑块沿水平方向滑向新位置，采用带过冲的弹簧曲线', '滑块宽度同步过渡到目标项的宽度', '切换瞬间滑块做一次极轻微的挤压拉伸，强化磁吸感']
    },
    {
      n: '浮动操作按钮', en: 'Floating Action Button', k: '旋转展开 · 抬升',
      d: '主界面的快捷入口，悬停时抬升并旋转。',
      h: `<button class="fab" data-toast data-msg="新建了一条记录" data-sub="悬浮按钮演示">+</button>`,
      v: ['近圆形的大操作面，承载一个简洁的加号或单图标', '渐变底色配合较深的远投影，从页面层级中浮出'],
      m: ['悬停时上浮并旋转四分之一圈，投影同步加深', '按下时收缩，像被压入界面', '点击给出即时的轻提示反馈']
    },
    {
      n: '角标按钮', en: 'Badge Button', k: '计数弹跳 · 红点',
      d: '按钮携带未读计数，数字出现时带弹跳。',
      h: `<button class="badge-btn" data-toast data-msg="你有 3 条未读消息" data-type="info">消息<span class="bdg">3</span></button>`,
      v: ['按钮本体是常规的次级玻璃按钮', '右上角骑一枚圆形计数徽标，压在按钮边界之上并带描边环'],
      m: ['徽标出现时以缩放曲线弹入，先过冲再落定', '悬停时按钮轻微上浮，徽标保持跟随不抖动']
    },
    {
      n: '按钮组', en: 'Button Group', k: '组内互斥 · 底色迁移',
      d: '一组语义相关的操作聚合成一个整体。',
      h: `<div class="btn-group" data-group>
        <button class="on">编辑</button><button>复制</button><button>归档</button></div>`,
      v: ['三个按钮共享外轮廓，之间以极细分隔线断开', '选中项获得实底强调色，未选中项保持透明'],
      m: ['选中状态在组内互斥迁移，底色以短促过渡切换', '悬停单个按钮时该项局部点亮，不牵动整组']
    }
  ]
});

DATA.push({
  id: 'forms', name: '表单控件', en: 'Form Controls',
  ic: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  items: [
    {
      n: '浮动标签输入框', en: 'Floating Label Input', k: '标签上浮 · 聚焦光晕',
      d: '标签在聚焦或有内容时优雅地浮到边框上方。',
      h: `<div class="fld"><input placeholder=" " type="email"><label>邮箱地址</label>
        <span class="fld-ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7.5 12 13l8.5-5.5"/></svg></span></div>`,
      v: ['输入面为内凹的玻璃槽，占位标签静置在正中', '标签浮起时带上色小字，并垫一段与背景同色的遮挡底'],
      m: ['聚焦或输入内容时标签缩小上浮到边框线上，过渡平滑无跳动', '边框点亮的同时外围出现一圈柔和光晕，而非硬描边', '右侧装饰图标在聚焦时同步点亮']
    },
    {
      n: '密码输入框', en: 'Password Field', k: '显隐切换 · 图标形变',
      d: '一键切换明文与密文，图标同步形变。',
      h: `<div class="pw"><input type="password" value="LiquidGlass2026" aria-label="密码">
        <button class="eye" data-pw aria-label="显示密码"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></button></div>`,
      v: ['与常规输入框一致的玻璃槽，右侧内嵌一枚眼睛图标按钮', '图标按钮有独立的圆形热区，不与文字重叠'],
      m: ['点击时输入内容在明文与圆点间即时切换', '图标本身也在可见/遮蔽两种形态间交叉过渡', '图标悬停时点亮为主题色并带浅底']
    },
    {
      n: '多行文本框', en: 'Textarea', k: '聚焦描边 · 自由缩放',
      d: '用于较长输入，可拖拽右下角调节高度。',
      h: `<textarea class="ta" placeholder="写下你的想法…（可拖右下角缩放）"></textarea>`,
      v: ['较深的内凹底面，行距宽松，四角与单行输入保持同一圆角语言', '占位文字用最弱的字色'],
      m: ['聚焦时描边点亮并出现外圈柔光', '支持原生拖拽缩放，缩放过程内容实时重排']
    },
    {
      n: '下拉选择框', en: 'Select', k: '展开缩放 · 选项落座',
      d: '展开时菜单从顶部锚点弹性张开，选项逐条落座。',
      h: `<div class="dd">
        <button class="dd-t" data-dd-t><span class="dd-lab">液态玻璃</span>
          <svg class="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="dd-m">
          <button class="sel" data-dd-i>液态玻璃<svg class="ck" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4.5 12.5l5 5 10-11"/></svg></button>
          <button data-dd-i>极简扁平<svg class="ck" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4.5 12.5l5 5 10-11"/></svg></button>
          <button data-dd-i>新拟态质感<svg class="ck" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4.5 12.5l5 5 10-11"/></svg></button>
        </div></div>`,
      v: ['触发器是带箭头的玻璃按钮，已选项显示当前值', '浮层菜单为独立的玻璃面板，带深投影与圆角'],
      m: ['展开时菜单自顶部锚点向下张开，带轻微缩放与上浮的复合过渡', '箭头同步旋转半圈', '选项悬停时局部点亮，选中项带勾选标记；点击后收起并回写值']
    },
    {
      n: '复选框', en: 'Checkbox', k: '勾线描绘 · 填充回弹',
      d: '勾选时对号以描线动画画出，底块带回弹。',
      h: `<div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start">
        <label class="chk"><input type="checkbox" checked><span>接收产品更新</span></label>
        <label class="chk"><input type="checkbox"><span>同步到云端</span></label></div>`,
      v: ['方圆形的小勾选块，未选时是细描边的空心面', '勾选后底面填充强调色，勾线为反白细笔画'],
      m: ['勾选瞬间底块先轻微放大再落定，带一次回弹', '对号以描线方式画出，而不是直接出现', '取消时勾线快速擦除、底色淡出']
    },
    {
      n: '单选卡片', en: 'Radio Card', k: '选中描边 · 抬升吸附',
      d: '将选项做成卡片，选中的卡片被描边点亮。',
      h: `<div class="radio-cards">
        <label class="rcard"><input type="radio" name="rc-demo" checked><b>基础版</b><small>个人使用</small></label>
        <label class="rcard"><input type="radio" name="rc-demo"><b>专业版</b><small>团队协作</small></label>
        <label class="rcard"><input type="radio" name="rc-demo"><b>旗舰版</b><small>全功能</small></label></div>`,
      v: ['每张卡片是独立的玻璃面板，内含标题与一行辅助说明', '未选中态弱化边框与底色'],
      m: ['悬停时卡片轻微上浮并点亮边框', '选中的卡片获得强调描边与一圈外扩柔光，同时保持原位', '切换选项时新旧卡片状态平滑交接，不做跳变']
    },
    {
      n: '开关', en: 'Switch', k: '磁吸滑块 · 过冲回弹',
      d: '滑块像被磁铁吸向另一端，带过冲回弹。',
      h: `<div style="display:flex;gap:22px;align-items:center">
        <button class="gsw on" data-sw aria-label="开关1"></button>
        <button class="gsw" data-sw aria-label="开关2"></button></div>`,
      v: ['胶囊形轨道，内部一枚纯白圆形滑块，滑块带自身投影浮于轨道之上', '关闭态轨道是低调的凹陷玻璃，开启态换为强调渐变'],
      m: ['切换时滑块以弹簧曲线滑向目标端，末端带轻微过冲回弹', '轨道底色在滑块行进途中交叉淡入，不等滑块到位才变色', '按住时滑块被拉长，模拟橡皮筋般的挤压形变']
    },
    {
      n: '滑块', en: 'Slider', k: '拇指按压 · 填充跟随',
      d: '拖动时填充条实时跟随，拇指按压放大。',
      h: `<div class="rng">
        <div class="rng-top"><span>亮度</span><b data-rng-out>64%</b></div>
        <input type="range" min="0" max="100" value="64" data-suffix="%" aria-label="亮度"></div>`,
      v: ['细长的胶囊轨道，左侧已划过区域用强调色填充', '圆形白拇指带投影，静止时无多余装饰'],
      m: ['拖动时填充与数值实时跟随，无延迟', '按住拇指时明显放大，松开回弹到常态', '数值读数与填充同步变化，强化操控的因果感']
    },
    {
      n: '数值步进器', en: 'Stepper', k: '数字翻动 · 按压反馈',
      d: '小幅度增减数值，变化时数字带翻动反馈。',
      h: `<div class="stp">
        <button data-step="-1" aria-label="减少">−</button>
        <span class="stp-val">3</span>
        <button data-step="1" aria-label="增加">+</button></div>`,
      v: ['三段式胶囊：减号、数值、加号共处一个玻璃槽', '中间数值使用等宽数字，保证宽度稳定不抖'],
      m: ['点击加减时数值做一次短促的上翻或下翻淡入', '被按的键位快速收缩再回弹', '数值触到边界时不再变化，按钮可给出弱化态']
    },
    {
      n: '搜索框', en: 'Search Field', k: '聚焦展宽 · 圆角收缩',
      d: '聚焦时微微展宽，圆角向胶囊收拢。',
      h: `<label class="srch">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="opacity:.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.2-4.2"/></svg>
        <input placeholder="搜索组件…" aria-label="搜索"></label>`,
      v: ['胶囊形的浅玻璃槽，左侧内嵌放大镜图标', '占位文字与图标同为弱字色'],
      m: ['聚焦时整体宽度平滑增加，边框点亮并出现外圈柔光', '图标在聚焦时点亮为主题色', '过渡使用较慢的缓动，避免宽度变化显得急躁']
    },
    {
      n: '标签输入框', en: 'Tag Input', k: '回车入列 · 缩放弹入',
      d: '回车添加标签，新标签缩放弹入。',
      h: `<div class="chips-in" data-chips>
        <span class="chipx">组件库 <button data-chipx aria-label="移除">×</button></span>
        <span class="chipx">动效 <button data-chipx aria-label="移除">×</button></span>
        <input placeholder="回车添加标签…" aria-label="添加标签"></div>`,
      v: ['外框是可点击聚焦的玻璃槽，内部标签与输入行内混排', '标签为小圆角胶囊，用浅强调底 + 强调字色'],
      m: ['回车时新标签以缩放曲线弹入队列', '点叉或在空输入上退格时，标签收缩消失', '聚焦外框点亮柔光']
    },
    {
      n: '表单校验', en: 'Form Validation', k: '错误抖动 · 成功点亮',
      d: '边输入边校验，错误抖动、成功点亮。',
      h: `<div class="vbox">
        <input data-valid="email" placeholder="you@example.com" aria-label="邮箱校验">
        <div class="vmsg"></div></div>`,
      v: ['常规玻璃输入面，下方预留一行消息区', '消息区左侧带小图标，分别对应错误与成功'],
      m: ['校验失败时输入面做一次短促的横向抖动，边框转为危险色', '校验成功时边框转为成功色，消息自下方淡入上移', '从错误恢复到成功时无抖动，只有颜色与文字的平滑交接']
    },
    {
      n: '星级评分', en: 'Rating', k: '逐颗点亮 · 悬停预览',
      d: '悬停即预览打分，点击落定。',
      h: `<div class="rate" data-val="4">
        <button data-star="1" class="hit" aria-label="1星">★</button><button data-star="2" class="hit" aria-label="2星">★</button>
        <button data-star="3" class="hit" aria-label="3星">★</button><button data-star="4" class="hit" aria-label="4星">★</button>
        <button data-star="5" aria-label="5星">★</button></div>`,
      v: ['星形字符阵列，点亮态为暖色并带轻微辉光', '未点亮态是弱字色的空心视觉'],
      m: ['悬停到第几颗就预览到第几颗，移出后回落到已确认值', '单颗星悬停时放大并带旋转的俏皮动作', '点击落定后逐颗依次点亮，像波浪推过去']
    },
    {
      n: '文件上传区', en: 'Dropzone', k: '悬停抬升 · 虚线点亮',
      d: '拖入文件时区域点亮，点击也可选择。',
      h: `<div class="drop" data-toast data-msg="已选择文件（演示）" data-sub="支持拖拽与点击两种方式">
        <span class="drop-ic">⤓</span>拖拽文件到这里，或点击选择<small>支持常见图片与文档格式</small></div>`,
      v: ['虚线描边的浅底面板，内容居中，图标在上文字在下', '留白充足，提示语分主次两级'],
      m: ['悬停或拖入时虚线转为强调色、面板整体轻微上抬', '图标在悬停时向上跳一下', '接受投放时给出即时反馈提示']
    }
  ]
});
DATA.push({
  id: 'nav', name: '导航', en: 'Navigation',
  ic: '<circle cx="12" cy="12" r="9.2"/><path d="M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5z"/>',
  items: [
    {
      n: '标签页', en: 'Tabs', k: '指示块平移 · 内容换场',
      d: '指示块在标签间平滑迁移，内容随之切换。',
      h: `<div class="tabs" data-tabs><span class="tab-ink"></span>
        <button class="tab active" data-tab>全部</button>
        <button class="tab" data-tab>进行中</button>
        <button class="tab" data-tab>已完成</button></div>`,
      v: ['外层是浅玻璃底槽，内部漂浮一枚半透明的指示块', '指示块带描边与内高光，比底槽更亮一档'],
      m: ['切换时指示块通过位移与变宽同时过渡到新标签，曲线带回弹', '文字颜色随指示块到达而交接', '切换标签时对应内容区做淡入换场']
    },
    {
      n: '面包屑导航', en: 'Breadcrumb', k: '层级路径 · 悬停点亮',
      d: '清晰展示当前页面在信息结构中的位置。',
      h: `<div class="crumbs">
        <a href="#">首页</a><span class="sep">›</span>
        <a href="#">组件</a><span class="sep">›</span>
        <b>按钮与操作</b></div>`,
      v: ['中间层级是可点的弱字色链接，末级当前页用小胶囊包住并加重', '层级之间用细箭头分隔，间距均匀'],
      m: ['悬停链接时点亮为强调色并出现浅底胶囊', '末级胶囊带细边框，作为路径终点的视觉锚']
    },
    {
      n: '分页', en: 'Pagination', k: '页码弹起 · 当前锚定',
      d: '当前页锚定实底，其余页码悬停弹起。',
      h: `<div class="pgn" data-pg>
        <button data-pg-i>1</button><button data-pg-i class="on">2</button><button data-pg-i>3</button>
        <button data-pg-i="next">下一页 ›</button></div>`,
      v: ['一组等宽小方块，当前页为实底强调色', '前后翻页键比数字键稍宽，形成节奏区分'],
      m: ['悬停页码时单块上浮并点亮描边', '切换当前页时实底色短促交接', '按压时方块快速收缩回弹']
    },
    {
      n: '底部标签栏', en: 'Tab Bar', k: '图标弹跳 · 活动底光',
      d: '移动端主导航，选中项图标上跳并出现底光。',
      h: `<div class="tabbar" data-tabbar>
        <button class="tb-item on" data-tb><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3.5 10.5 12 3.5l8.5 7V20a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 20z"/></svg>首页</button>
        <button class="tb-item" data-tb><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.2-4.2"/></svg>发现<span class="tb-dot"></span></button>
        <button class="tb-item" data-tb><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>列表</button>
        <button class="tb-item" data-tb><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>我的</button>
      </div>`,
      v: ['悬浮的玻璃长条，内部等分若干个图标+文字的竖排单元', '选中单元带浅强调底，图标与文字同时换色；可携带未读红点'],
      m: ['切换时选中单元的底色短促交接，图标向上弹跳一次', '悬停未选项时图标轻微点亮', '红点持续低幅脉冲']
    },
    {
      n: '导航栏', en: 'Navbar', k: '下划线滑出 · 悬停响应',
      d: '站点级导航，悬停与选中时下划线滑出。',
      h: `<div class="navbar">
        <span class="nb-brand"><i></i>Aurora</span>
        <nav><a href="#" class="on">概览</a><a href="#">文档</a><a href="#">更新</a></nav>
        <span class="nb-act"><button class="gbtn sm soft" data-toast data-msg="已切换为访客模式">登录</button>
        <button class="gbtn sm primary" data-toast data-msg="欢迎加入（演示）">注册</button></span></div>`,
      v: ['一条通透的玻璃横条，左侧品牌、中部链接、右侧操作', '链接默认为次级字色，选中项换强调色'],
      m: ['悬停链接时下划线自左向右滑出，移出时反向收回', '当前页链接的下划线常驻', '右侧操作按钮保持常规的悬停上浮']
    },
    {
      n: '侧边导航菜单', en: 'Side Navigation', k: '选中块迁移 · 图标点亮',
      d: '选中块在菜单项间迁移，图标同步点亮。',
      h: `<div class="mlist" data-menulist><span class="ml-ink"></span>
        <button class="on" data-ml><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg>总览</button>
        <button data-ml><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 19V9M10 19V5M16 19v-7M21 19H3"/></svg>数据分析</button>
        <button data-ml><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5a6.5 6.5 0 0 1 13 0M16.5 5.2a3.5 3.5 0 0 1 0 6.6M18 19.5a6.4 6.4 0 0 0-2-4.6"/></svg>团队成员</button>
        <button data-ml><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 8.97 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.66 8.97a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c.24.63.84 1.05 1.51 1.06H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.03z"/></svg>设置</button>
      </div>`,
      v: ['竖排菜单容器，每项左侧一枚线性图标、右侧文案', '选中块是一块独立的玻璃面板，压在菜单底部层'],
      m: ['切换时选中块在项间滑动，曲线带回弹', '选中项图标与文字同时点亮为强调色', '悬停未选项时局部浅底提示']
    },
    {
      n: '步骤指示器', en: 'Steps', k: '进度推进 · 完成描勾',
      d: '三步流程指示，完成步描出对号。',
      h: `<div>
        <div class="steps">
          <div class="step done"><div class="st-dot"><i>1</i></div><span>填写信息</span></div>
          <div class="step now"><div class="st-dot"><i>2</i></div><span>确认订单</span></div>
          <div class="step"><div class="st-dot"><i>3</i></div><span>完成支付</span></div>
        </div>
        <div style="display:flex;gap:8px;justify-content:center;margin-top:18px">
          <button class="replay" data-stepflow="-1">← 上一步</button>
          <button class="replay" data-stepflow="1">下一步 →</button></div></div>`,
      v: ['节点为圆形数字徽章，节点之间以细线相连', '完成态节点填实并描出对号，进行中节点强调色，未达节点空心'],
      m: ['推进时连接线以扫过方式点亮，节点依次换态', '新完成的节点先放大再落定，带一次回弹', '当前步下方标签换强调色加重']
    },
    {
      n: '下拉菜单', en: 'Dropdown Menu', k: '锚点张开 · 逐项滑入',
      d: '顶部导航的次级入口，展开时逐项滑入。',
      h: `<div class="navdd">
        <button class="navdd-t" data-navdd-t>组件文档
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="navdd-m">
          <a href="#">快速开始<kbd>G S</kbd></a>
          <a href="#">设计原则<kbd>G D</kbd></a>
          <a href="#">组件一览<kbd>G C</kbd></a>
          <a href="#">更新日志<kbd>G L</kbd></a>
        </div></div>`,
      v: ['触发器是带箭头的玻璃胶囊', '菜单为独立玻璃面板，每项左侧文字、右侧快捷键提示'],
      m: ['展开时面板自锚点向下滑出并放大，箭头旋转半圈', '菜单项以极短的级联延迟依次淡入', '悬停项点亮并向右轻移，快捷键同步变亮']
    },
    {
      n: '命令面板', en: 'Command Palette', k: '快捷键唤起 · 面板下沉',
      d: '点击或按 ⌘K 唤起全局命令面板（本页真实可用）。',
      h: `<button class="palette-t" data-cmd>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="opacity:.55"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.2-4.2"/></svg>
        搜索命令… <kbd>⌘K</kbd></button>`,
      v: ['胶囊入口键带放大镜与快捷键徽标', '面板本体悬浮于页面上方，顶部是搜索行、中部是可滚动结果'],
      m: ['唤起时遮罩淡入，面板自上方下沉就位并轻微放大', '结果项支持方向键切换高亮，回车执行', '关闭时反向收起，焦点还给触发者']
    },
    {
      n: '回到顶部', en: 'Back to Top', k: '悬浮胶囊 · 平滑回滚',
      d: '长页面的快速归位入口，带平滑滚动。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <button class="iconbtn" data-backtop aria-label="返回顶部"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg></button>
        <span class="kbd-hint">回到页首（本页真实可用）</span></div>`,
      v: ['圆形玻璃键，内部一枚向上箭头', '静置时低调，作为长页面的常驻辅助'],
      m: ['点击触发平滑滚动回到页首', '悬停时上浮并点亮描边', '滚动过程中箭头可随进度做轻微的呼吸提示']
    }
  ]
});

DATA.push({
  id: 'data', name: '数据展示', en: 'Data Display',
  ic: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  items: [
    {
      n: '用户卡片', en: 'User Card', k: '悬浮抬升 · 光晕背景',
      d: '承载用户身份与快捷操作的玻璃卡片。',
      h: `<div class="ucard">
        <div class="uav">林<span class="uav-dot"></span></div>
        <h4>林晓岸</h4><p>产品设计师 · 在线</p>
        <div class="uacts">
          <button class="gbtn sm soft" data-toast data-msg="已发送私信（演示）">私信</button>
          <button class="gbtn sm primary" data-toast data-msg="已关注 林晓岸">关注</button></div></div>`,
      v: ['卡片右上角藏一团柔和的强调色光晕，作为装饰不抢内容', '头像为渐变圆形，右下角带在线状态点'],
      m: ['悬停时整卡上浮、边框点亮、光晕略微扩散', '状态点持续脉冲', '操作按钮各自带常规的悬停反馈']
    },
    {
      n: '头像组', en: 'Avatar Group', k: '悬停抽离 · 逐个上浮',
      d: '重叠头像代表协作成员，悬停单个会抽出。',
      h: `<div class="avstk">
        <span class="av av1">林</span><span class="av av2">周</span><span class="av av3">陈</span>
        <span class="av av4">李</span><span class="av more">+6</span></div>`,
      v: ['圆形头像依次重叠，各枚带与背景同色的描边环，保证边界清晰', '溢出者收进一枚中性的计数胶囊'],
      m: ['悬停单个头像时它上浮放大并抬高层级，邻枚保持不动', '移出后落回队列，重叠关系不变']
    },
    {
      n: '状态徽标', en: 'Status Badge', k: '呼吸点 · 语义配色',
      d: '用颜色与状态点传达数据的实时状态。',
      h: `<div class="bdgrow">
        <span class="bdg ok"><i></i>运行中</span>
        <span class="bdg warn"><i></i>待处理</span>
        <span class="bdg err"><i></i>异常</span>
        <span class="bdg info"><i></i>新版本</span>
        <span class="bdg mute"><i></i>已归档</span>
        <span class="bdg count">128</span></div>`,
      v: ['胶囊形，浅语义底 + 深语义字，左侧一枚同色状态点', '强调型徽标可用实底，数字居中'],
      m: ['活跃状态点做低幅呼吸脉冲', '悬停徽标时整体轻微上抬']
    },
    {
      n: '标签', en: 'Tag', k: '移除收缩 · 悬停上浮',
      d: '可移除的筛选标签，移除时队列收拢。',
      h: `<div class="tgrow">
        <span class="tg closable">液态玻璃<button class="tg-x" data-tgx aria-label="移除">×</button></span>
        <span class="tg closable">动效<button class="tg-x" data-tgx aria-label="移除">×</button></span>
        <span class="tg closable">表单<button class="tg-x" data-tgx aria-label="移除">×</button></span>
        <span class="tg">移动端<button class="tg-x" data-tgx aria-label="移除">×</button></span></div>`,
      v: ['小圆角胶囊，细描边 + 淡底，字色居中', '右侧的叉号平时弱化，避免视觉噪音'],
      m: ['悬停标签时上浮并点亮描边，叉号随之亮起', '移除时标签横向收缩淡出，相邻标签平滑补位']
    },
    {
      n: '数据表格', en: 'Table', k: '行悬停 · 列对齐',
      d: '行悬停高亮，数字列等宽对齐。',
      h: `<table class="tbl">
        <thead><tr><th>组件</th><th>分类</th><th>状态</th><th>用量</th></tr></thead>
        <tbody>
          <tr><td><b>玻璃主按钮</b></td><td>按钮</td><td><span class="bdg ok" style="padding:2px 8px;font-size:10px"><i></i>稳定</span></td><td class="num">1,204</td></tr>
          <tr><td><b>悬浮标签输入</b></td><td>表单</td><td><span class="bdg info" style="padding:2px 8px;font-size:10px"><i></i>新</span></td><td class="num">861</td></tr>
          <tr><td><b>底部标签栏</b></td><td>导航</td><td><span class="bdg warn" style="padding:2px 8px;font-size:10px"><i></i>测试</span></td><td class="num">433</td></tr>
        </tbody></table>`,
      v: ['表头用等宽小字与分隔线区分，表体行距宽松', '数字列右对齐或等宽对齐，便于纵向比较'],
      m: ['悬停行时整行点亮浅强调底，文字升为主字色', '状态徽标在行内保持自身的语义动效']
    },
    {
      n: '列表项', en: 'List Item', k: '右移揭示 · 图标旋转',
      d: '可点击的列表行，悬停整体右移揭示层级。',
      h: `<div style="display:flex;flex-direction:column;gap:9px;width:100%;max-width:270px">
        <button class="lrow" data-toast data-msg="打开：组件规范" data-type="info">
          <span class="lr-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3.5" width="16" height="17" rx="3"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/></svg></span>
          <span class="lr-t"><b>组件规范</b><span>最近更新 · 昨天</span></span><span class="lr-r">→</span></button>
        <button class="lrow" data-toast data-msg="打开：动效参数" data-type="info">
          <span class="lr-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 12h4l3-7 4 14 3-7h4"/></svg></span>
          <span class="lr-t"><b>动效参数</b><span>最近更新 · 3 天前</span></span><span class="lr-r">→</span></button></div>`,
      v: ['行内三段式：图标章、主副文案、右侧引导符', '图标章是浅底圆角方块，主题色图标居中'],
      m: ['悬停时整行向右平移一小段，边框点亮', '图标章原地轻微旋转放大，并翻转为实底反白', '右侧箭头滑入半步']
    },
    {
      n: '时间线', en: 'Timeline', k: '纵线生长 · 逐条推入',
      d: '进入视口时轴线自上而下生长，事件依次推入。',
      h: `<div class="tl">
        <div class="tl-item hot"><time>09:20</time><b>部署完成</b><p>生产环境发布成功，耗时 2 分 14 秒。</p></div>
        <div class="tl-item"><time>08:45</time><b>通过全部测试</b><p>单元测试与视觉回归全部通过。</p></div>
        <div class="tl-item"><time>昨天</time><b>合并功能分支</b><p>三个特性分支合并到主干。</p></div></div>`,
      v: ['左侧一条竖轴，节点钉在轴上；右侧是时间、标题与描述', '最新节点用强调色实心，历史节点为空心'],
      m: ['进入视口时轴线自顶部向下生长出来', '事件条目自左侧依次淡入推出，带级联延迟', '生长完成后节点保持静态，不循环干扰阅读']
    },
    {
      n: '数据统计卡', en: 'Stats Card', k: '数字滚动 · 迷你波形',
      d: '核心指标卡，进入视口时数字从零滚到目标值。',
      h: `<div class="stat">
        <span class="st-spark"><i></i><i></i><i></i><i></i><i></i></span>
        <div class="st-cap">月活用户</div>
        <div class="st-val"><span data-count="24800" data-unit="">0</span></div>
        <div class="st-dlt up">▲ 12.4% 对比上月</div></div>`,
      v: ['卡片左上是指标名与大号等宽数字，下方是同比变化', '右上角一组迷你竖条作为活跃度波形'],
      m: ['进入视口时数字以缓出曲线从零滚动到目标值', '迷你竖条各自做错相的起伏动画，像实时采样', '悬停时卡片上浮并点亮边框']
    },
    {
      n: '环形进度条', en: 'Progress Ring', k: '描边绘入 · 数值同步',
      d: '圆环从零绘入到目标比例，中心数值同步。',
      h: `<div class="ring" data-pct="70">
        <svg viewBox="0 0 120 120">
          <defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#6d7dff"/><stop offset="1" stop-color="#c44dff"/></linearGradient></defs>
          <circle class="rk-bg" cx="60" cy="60" r="50"/>
          <circle class="rk-fg" cx="60" cy="60" r="50"/></svg>
        <div class="rk-tx"><b>70<span style="font-size:14px">%</span></b><span>本周目标</span></div></div>`,
      v: ['粗圆环轨道用弱底色，进度段为渐变描边并以圆头收尾', '中心上下两行：大号数值与小号说明'],
      m: ['进入视口时描边沿圆周自零绘入到目标比例，曲线用长缓动', '绘入过程中中心数值同步递增到目标', '绘入完成后静止，不循环']
    },
    {
      n: '柱状图', en: 'Bar Chart', k: '逐柱拔起 · 数值浮现',
      d: '进入视口时柱子依次拔起，数值随后浮现。',
      h: `<div class="bars">
        <span class="bar"><b>42</b><i data-h="45"></i><span>一</span></span>
        <span class="bar"><b>58</b><i data-h="60"></i><span>二</span></span>
        <span class="bar hi"><b>86</b><i data-h="88"></i><span>三</span></span>
        <span class="bar"><b>64</b><i data-h="66"></i><span>四</span></span>
        <span class="bar"><b>73</b><i data-h="75"></i><span>五</span></span>
        <span class="bar"><b>51</b><i data-h="52"></i><span>六</span></span></div>`,
      v: ['每根柱子是圆角竖条，底部对齐、间距一致', '峰值柱换用更饱和的强调渐变，其余为弱渐变'],
      m: ['进入视口时柱子按序从底部拔起，带级联延迟', '柱顶数值在柱子接近就位时淡入', '悬停单柱可轻微加亮，强调当前焦点']
    },
    {
      n: '折线图', en: 'Line Chart', k: '路径描绘 · 面积晕开',
      d: '路径自左向右描绘，数据点随后点亮。',
      h: `<div class="lchart">
        <svg viewBox="0 0 280 110" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lcGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6d7dff"/><stop offset="1" stop-color="#c44dff"/></linearGradient>
            <linearGradient id="lcArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6d7dff" stop-opacity=".35"/><stop offset="1" stop-color="#6d7dff" stop-opacity="0"/></linearGradient>
          </defs>
          <path class="lc-area" d="M0 86 C40 78 55 40 90 46 S150 84 185 58 S245 20 280 26 L280 110 L0 110 Z"/>
          <path class="lc-line" d="M0 86 C40 78 55 40 90 46 S150 84 185 58 S245 20 280 26"/>
          <g class="lc-dots" fill="#6d7dff"><circle cx="90" cy="46" r="4.5"/><circle cx="185" cy="58" r="4.5"/><circle cx="278" cy="26" r="4.5"/></g>
        </svg>
        <div class="lc-axis"><span>周一</span><span>周三</span><span>周五</span><span>周日</span></div></div>`,
      v: ['一条渐变描边的平滑曲线，曲线下方是渐隐的面积填充', '关键数据点为带描边的小圆点'],
      m: ['进入视口时曲线自左向右描绘而出', '描绘过半后面积从曲线下方晕染开来', '数据点按时间序依次弹出，最后落定']
    },
    {
      n: '折叠面板', en: 'Accordion', k: '高度展开 · 图标翻转',
      d: '折叠面板展开时高度平滑推开，图标翻转。',
      h: `<div class="acc">
        <div class="acc-i open">
          <button class="acc-h" data-acc-h><span class="acc-i-ic">◈</span>提示词为什么不写颜色？
            <svg class="acc-arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
          <div class="acc-b"><p>写死色值会把风格锁死在出题人的偏好里。只描述材质、层次与运动意图，风格令牌留给生成方推导，同一份提示词才能适配不同设计体系。</p></div></div>
        <div class="acc-i">
          <button class="acc-h" data-acc-h><span class="acc-i-ic">◈</span>如何使用这些演示？
            <svg class="acc-arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
          <div class="acc-b"><p>每个卡片都是真实可交互的代码。点开「AI 提示词」，勾选技术栈与风格选项，复制给你的 AI 即可生成对应实现。</p></div></div>
        <div class="acc-i">
          <button class="acc-h" data-acc-h><span class="acc-i-ic">◈</span>支持哪些技术栈？
            <svg class="acc-arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
          <div class="acc-b"><p>提示词可选 React + Tailwind、Vue 3、原生三件套与 Web Components，附加项还能追加无障碍、触控适配、TypeScript 等要求。</p></div></div>
      </div>`,
      v: ['每项是独立的玻璃行，左侧小图标章、右侧折叠箭头', '展开项边框点亮为强调色并带浅强调底'],
      m: ['展开时面板高度平滑推开，内容随高度到位而显现', '箭头旋转半圈，图标章旋转并翻为实底', '允许多项同时展开，互不抢占']
    },
    {
      n: '树形控件', en: 'Tree View', k: '分支展开 · 缩进滑入',
      d: '层级目录展开收起，子项带缩进过渡。',
      h: `<div class="tree">
        <div class="tree-i open">
          <div class="tree-t" data-tree-t><span class="t-ar">▶</span><svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2.5h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/></svg>组件库</div>
          <div class="tree-c">
            <div class="tree-i open">
              <div class="tree-t" data-tree-t><span class="t-ar">▶</span><svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 7.5A2 2 0 0 1 5.5 5.5h4l2 2.5h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/></svg>css</div>
              <div class="tree-c">
                <div class="tree-t file" data-tree-t><span class="t-ar"></span><svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>base.css</div>
                <div class="tree-t file" data-tree-t><span class="t-ar"></span><svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>scenes.css</div>
              </div></div>
            <div class="tree-t file" data-tree-t><span class="t-ar"></span><svg class="t-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>index.html</div>
          </div></div></div>`,
      v: ['每级以缩进与竖向引导线表达层级，叶节点用文件图标', '展开的目录图标与文字点亮为强调色'],
      m: ['展开时子树高度平滑推开，箭头旋转半圈', '子项随展开自左侧轻微滑入', '悬停行局部点亮浅底']
    },
    {
      n: '迷你日历', en: 'Mini Calendar', k: '今日高亮 · 悬停弹跳',
      d: '月视图日历，今天高亮、有事件的日期带下点。',
      h: `<div class="cal" data-cal data-y="2026" data-m="9" data-sel="15">
        <div class="cal-top"><b data-cal-label>2026 年 10 月</b>
          <div><button data-calnav="-1" aria-label="上月">‹</button><button data-calnav="1" aria-label="下月">›</button></div></div>
        <div class="cal-grid">
          <span class="cw">一</span><span class="cw">二</span><span class="cw">三</span><span class="cw">四</span><span class="cw">五</span><span class="cw">六</span><span class="cw">日</span>
          <span class="dim">29</span><span class="dim">30</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          <span>6</span><span class="mark">7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
          <span>13</span><span>14</span><span class="today mark">15</span><span>16</span><span>17</span><span>18</span><span>19</span>
          <span>20</span><span class="mark">21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
          <span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span class="dim">1</span><span class="dim">2</span>
        </div></div>`,
      v: ['七列等分网格，表头用等宽小字', '今天是一枚实底强调圆，有事件的日子在底部带小点'],
      m: ['悬停日期格时该格放大弹起并点亮浅底', '月份切换键悬停时点亮实底', '今日徽标可做一次轻微的入场缩放']
    },
    {
      n: '代码块', en: 'Code Block', k: '语法着色 · 一键复制',
      d: '带语言标签与复制按钮的代码展示区。',
      h: `<div class="codeblk">
        <div class="cb-top">
          <span class="cb-dot" style="background:#ff6b6b"></span><span class="cb-dot" style="background:#ffc25e"></span><span class="cb-dot" style="background:#3ddc97"></span>
          <span class="cb-lang">css</span>
          <button class="cb-copy" data-copycode>复制</button></div>
        <pre><code><span class="tk">.glass</span> {
  <span class="tk">background</span>: <span class="ts">linear-gradient</span>(150deg, var(--g1), var(--g2));
  <span class="tk">backdrop-filter</span>: <span class="ts">blur</span>(28px) <span class="ts">saturate</span>(180%);
  <span class="tc">/* 上沿内高光模拟玻璃反光 */</span>
  <span class="tk">box-shadow</span>: <span class="ts">inset</span> 0 1px 0 var(--hi);
}</code></pre></div>`,
      v: ['顶部窗口栏带三枚窗口点、语言标签与复制键', '代码区深底，关键字、字符串、注释分层着色'],
      m: ['复制键点击后短暂换为成功态', '窗口点可带 macOS 式的悬停变亮（可选）', '代码区横向滚动不破坏外框']
    },
    {
      n: '快捷键标记', en: 'Keyboard Shortcut', k: '按压缩进 · 组合提示',
      d: '快捷键的可视化表达，按下时缩进。',
      h: `<div>
        <div class="kbdrow">
          <kbd class="k">⌘</kbd><kbd class="k">⇧</kbd><kbd class="k">P</kbd>
          <span class="kbd-hint" style="margin:0 4px">或</span>
          <kbd class="k wide">Ctrl</kbd><kbd class="k">K</kbd>
          <button class="replay" data-keys style="margin-left:8px">演示按下</button></div></div>`,
      v: ['键帽是小圆角方块，底部多出一圈厚度边，模拟实体键', '常用键与修饰键尺寸区分'],
      m: ['按下时键帽缩进、厚度边收薄，颜色点亮', '演示模式下按组合顺序依次按下再弹起', '悬停时键帽轻微抬起']
    }
  ]
});
DATA.push({
  id: 'feedback', name: '反馈提示', en: 'Feedback',
  ic: '<path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H8l-4.5 4V5.5A2.5 2.5 0 0 1 6 3h12.5A2.5 2.5 0 0 1 21 5.5z"/>',
  items: [
    {
      n: '轻提示', en: 'Toast', k: '侧滑入列 · 自动消散',
      d: '右上角滑入堆叠，停留片刻自动消散。',
      h: `<div style="display:flex;gap:9px;flex-wrap:wrap;justify-content:center">
        <button class="gbtn sm primary" data-toast data-msg="保存成功" data-sub="更改已写入工作区">成功</button>
        <button class="gbtn sm ghost" data-toast data-msg="网络请求失败" data-sub="请稍后重试" data-type="err">失败</button>
        <button class="gbtn sm soft" data-toast data-msg="已同步最新配置" data-type="info">通知</button></div>`,
      v: ['横向卡片：左侧状态图标章、右侧主文案与副文案', '玻璃底 + 深投影，多条在角落纵向堆叠'],
      m: ['出现时自右侧滑入，带缩放与淡入的复合过渡', '多条同时出现时依次错峰入场', '停留后自动退场，退场带淡出与继续外移，不生硬消失']
    },
    {
      n: '模态对话框', en: 'Modal', k: '遮罩模糊 · 图标弹入',
      d: '危险操作的二次确认，图标先于内容弹入。',
      h: `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
        <button class="gbtn ghost" data-modal data-title="确认删除这条数据？" data-desc="此操作不可撤销。该条记录会从你的工作区中永久移除。" data-ok="确认删除">危险操作</button>
        <button class="gbtn soft" data-modal data-title="发布新版本？" data-desc="版本将对所有订阅用户立即生效，你可以随时回滚。" data-ok="立即发布" data-type="info">常规确认</button></div>`,
      v: ['全屏遮罩为半透明深色叠加背景模糊，聚焦视线', '弹窗是大圆角玻璃面板：图标章、标题、说明、双操作'],
      m: ['打开时遮罩淡入，弹窗从缩小与下移的状态回弹就位', '图标章带一次旋转缩放的弹入，延迟于面板', '关闭时反向收起；期间锁定页面滚动，支持点击遮罩与 Esc 取消']
    },
    {
      n: '底部动作面板', en: 'Action Sheet', k: '底部上滑 · 分组堆叠',
      d: 'iOS 风格的底部动作面板，整组上滑入场。',
      h: `<button class="gbtn primary" data-sheet>打开动作面板</button>`,
      v: ['半屏遮罩之上，一组圆角面板自底部堆叠：说明头、动作列、独立的取消键', '动作列行高宽大，便于拇指触达，危险项用语义色'],
      m: ['打开时整组自屏幕底部上滑就位，带轻微的减速曲线', '关闭时反向下滑离场', '点选任一动作后收起并给出轻提示']
    },
    {
      n: '警告条', en: 'Alert', k: '入场下落 · 关闭收拢',
      d: '就地呈现的分级提示，可逐条关闭。',
      h: `<div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:340px">
        <div class="alert info">
          <span class="al-ic">i</span>
          <div><b>发现新版本</b><p>v2.4 已发布，包含 12 项改进与 3 个修复。</p></div>
          <button class="al-x" data-x aria-label="关闭">✕</button></div>
        <div class="alert err">
          <span class="al-ic">!</span>
          <div><b>连接中断</b><p>与服务器的连接已断开，正在自动重试。</p></div>
          <button class="al-x" data-x aria-label="关闭">✕</button></div>
        <div class="alert ok">
          <span class="al-ic">✓</span>
          <div><b>部署完成</b><p>生产环境已是最新构建。</p></div>
          <button class="al-x" data-x aria-label="关闭">✕</button></div></div>`,
      v: ['左侧一条语义色竖条定义级别，右侧图标章、标题与说明', '底面为淡玻璃，级别通过颜色而非大面积色块表达'],
      m: ['入场时自上方轻落就位', '关闭时向上收拢并淡出，相邻条目平滑补位', '短暂时间后演示自动恢复，便于反复观察']
    },
    {
      n: '横幅通知', en: 'Banner', k: '渐次下落 · 强调渐变',
      d: '全局性的重要通知，可关闭。',
      h: `<div class="banner">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3l9 16H3z"/><path d="M12 10v4M12 17h.01"/></svg>
        <span><b>维护公告：</b>本周日 02:00–04:00 服务短暂停机</span>
        <button class="bn-x" data-x aria-label="关闭">✕</button></div>`,
      v: ['带强调渐变的窄条，文字为主、左右各一枚图标', '视觉重量高于 Alert，但只占一行高度'],
      m: ['入场时自顶部落下，带轻微过冲', '关闭时上移淡出', '悬停时背景渐变微微提亮']
    },
    {
      n: '骨架屏', en: 'Skeleton', k: '流光扫过 · 淡入接管',
      d: '占位骨架流光扫过，加载完成后交棒给真实内容。',
      h: `<div style="width:100%;max-width:270px;display:flex;flex-direction:column;gap:14px;align-items:flex-start">
        <div class="swap" style="width:100%">
          <div class="sw-a sk-wrap"><div class="sk">
            <span class="sk-b sk-av"></span>
            <span class="sk-col"><span class="sk-b sk-l1"></span><span class="sk-b sk-l2"></span><span class="sk-b sk-l3"></span></span></div></div>
          <div class="sw-b">
            <div class="lrow" style="cursor:default">
              <span class="lr-ic" style="background:linear-gradient(135deg,#6d7dff,#c44dff);color:#fff;border:none">林</span>
              <span class="lr-t"><b>林晓岸 发布了 v2.4</b><span>包含新组件与动效优化</span></span>
              <span class="bdg ok" style="padding:3px 9px"><i></i>新</span></div></div>
        </div>
        <button class="replay" data-swap>模拟数据加载</button></div>`,
      v: ['骨架形状与真实内容对齐：圆形头像位 + 三行文字位', '占位块为浅玻璃材质，宽窄模拟真实文本'],
      m: ['一条高光带循环从右向左扫过占位块，暗示正在加载', '加载完成时骨架淡出、真实内容自下方淡入接管', '两者布局一致，交接时无跳动']
    },
    {
      n: '加载指示器', en: 'Spinner', k: '旋转 · 跳动 · 脉冲',
      d: '四种表达「进行中」的轻量指示器。',
      h: `<div>
        <div class="spns">
          <span class="spn spin"></span>
          <span class="spn ring2"></span>
          <span class="spn dots"><i></i><i></i><i></i></span>
          <span class="spn pulse"></span>
        </div>
        <div class="spn-lab"><span>环形</span><span>双环</span><span>三点</span><span style="width:30px">脉冲</span></div></div>`,
      v: ['全部基于最基本的几何形：环、点、圆', '统一使用主题色，尺寸一致，排成一行便于对比'],
      m: ['环形匀速旋转；双环反向差速旋转', '三点依次跳动，末端渐弱形成波次', '脉冲圆持续扩散淡出，像心跳的回波']
    },
    {
      n: '进度条', en: 'Progress', k: '填充推进 · 扫光流动',
      d: '确定进度与不确定进度两种形态。',
      h: `<div style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:270px">
        <div class="prg">
          <div class="prg-top"><span>上传组件资产</span><b data-prg-text>72%</b></div>
          <div class="prg-track"><div class="prg-fill" data-prg="72"></div></div></div>
        <div class="prg indet">
          <div class="prg-top"><span>正在生成提示词…</span></div>
          <div class="prg-track"><div class="prg-fill"></div></div></div></div>`,
      v: ['胶囊轨道内一条同高的渐变填充，右端可带高光', '不确定态复用同一轨道，长度不定'],
      m: ['进入视口时填充从零推进到目标宽度，曲线用长缓动', '填充内部有一道扫光循环流过，表示仍在进行', '不确定态在轨道内往返游走，节奏稳定不焦虑']
    },
    {
      n: '空状态', en: 'Empty State', k: '插画呼吸 · 行动召唤',
      d: '无内容时给出方向，而不是留白。',
      h: `<div class="state">
        <div class="st-art">
          <svg viewBox="0 0 86 86" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <circle class="orbit" cx="66" cy="22" r="6" fill="currentColor" stroke="none" opacity=".9"/>
            <path d="M18 30h50v34a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6z"/>
            <path d="M18 44h14l4 8h14l4-8h14"/></svg></div>
        <h4>这里还没有内容</h4>
        <p>创建第一个组件条目，或从提示词库导入一份模板开始。</p>
        <button class="gbtn sm primary" data-toast data-msg="已创建空白条目">新建条目</button></div>`,
      v: ['线性插画居中，下方标题、说明、行动按钮纵排', '插画只用描边与一枚强调色点缀，不喧宾'],
      m: ['插画中的点缀元素做缓慢的环绕或呼吸运动', '按钮保持常规悬停反馈，作为唯一行动出口']
    },
    {
      n: '错误状态', en: 'Error State', k: '错位抖动 · 重试引导',
      d: '出错时明确原因，并给出重试出口。',
      h: `<div class="state err-art">
        <div class="st-art">
          <svg viewBox="0 0 86 86" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <path d="M43 16 74 70H12z"/><path d="M43 36v14M43 58h.01"/>
            <circle cx="68" cy="20" r="5" fill="currentColor" stroke="none" opacity=".55"/></svg></div>
        <h4>内容加载失败</h4>
        <p>请求超时了。检查网络后重试，或稍后再来。</p>
        <button class="gbtn sm ghost" data-retry>重新加载</button></div>`,
      v: ['警示插画 + 直白的原因说明 + 单一的重试出口', '语义色只出现在插画与按钮悬停上'],
      m: ['插画的警示点缀做低幅的闪烁抖动，暗示异常', '重试按钮点击后给出「正在重新加载」的轻提示', '文案只陈述事实与下一步，不道歉不甩锅']
    },
    {
      n: '工具提示', en: 'Tooltip', k: '上浮淡入 · 快捷键提示',
      d: '对触发元素的补充说明，悬停即现。',
      h: `<div class="tipw">
        <button class="gbtn ghost">悬停查看提示</button>
        <div class="tip">删除后将进入 30 天回收站<span class="tip-k">⌫</span></div></div>`,
      v: ['深色半透明小面板，白字圆角，底部一枚指向触发元素的小三角', '可带一个快捷键后缀，弱化显示'],
      m: ['悬停时气泡自下方上浮并放大就位，三角同步露出', '移出时快速淡出，不拖泥带水', '出入方向始终与三角指向一致']
    },
    {
      n: '弹出气泡', en: 'Popover', k: '锚点展开 · 点击驱动',
      d: '点击触发的轻量浮层，承载说明与操作。',
      h: `<div class="popw">
        <button class="gbtn soft" data-pop>点击弹出</button>
        <div class="pop">
          <b>关于这条数据</b>
          <p>创建于 3 天前，由林晓岸提交，最后同步于 10 分钟前。</p>
          <div class="pop-acts">
            <button class="gbtn sm primary" data-toast data-msg="已复制数据编号">复制编号</button>
            <button class="gbtn sm ghost" data-pop-close>关闭</button></div></div></div>`,
      v: ['玻璃面板自按钮底部锚点展开，顶部一枚指向三角', '内部是标题、正文与一排操作按钮的紧凑结构'],
      m: ['展开时自锚点向下缩放浮现，三角同步露出', '点击外部或按 Esc 收起', '悬停内部操作时按钮各自响应，不牵动面板']
    },
    {
      n: '通知卡片', en: 'Notification', k: '头像入列 · 未读脉冲',
      d: '带身份与时间的可关闭通知。',
      h: `<div class="notif" data-dismissible>
        <span class="nf-dot"></span>
        <span class="nf-av av2">周</span>
        <div class="nf-b">
          <b>周叙 回复了你的评论</b>
          <p>「动效参数表我补了两条曲线，你看下是否合适。」</p>
          <time>2 分钟前 · 组件库 PR #42</time></div>
        <button class="nf-x" data-x aria-label="关闭">✕</button></div>`,
      v: ['左侧身份头像、中部两行内容与时间戳、右侧关闭键', '未读状态由右上角的强调色圆点标记'],
      m: ['入场时自右上轻落就位', '未读点持续低幅脉冲', '关闭时整卡向右滑出淡去，稍后演示自动恢复']
    },
    {
      n: '行内确认', en: 'Inline Confirmation', k: '原地展开 · 破坏性收尾',
      d: '不打断流程的就地二次确认。',
      h: `<div class="confirm">
        <button class="cf-main" data-confirm>
          <span><b style="display:block;font-size:13px">删除草稿</b>
          <span style="font-size:11px;color:var(--ink-3)">最后编辑于昨天</span></span>
          <svg class="cf-ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M6.5 7l1 12.5A1.5 1.5 0 0 0 9 21h6a1.5 1.5 0 0 0 1.5-1.5L17.5 7"/></svg></button>
        <div class="cf-ask">
          <p>确定要删除这份草稿吗？此操作不可撤销。</p>
          <div class="cf-btns"><button class="cf-no" data-cf-no>取消</button><button class="cf-yes" data-cf-yes>删除</button></div></div></div>`,
      v: ['单行卡片：标题与元信息在左、破坏性图标在右', '确认区藏在卡片内部，展开后才露出说明与双按钮'],
      m: ['点击后确认区沿垂直方向平滑推开，边框转为警示', '取消时原地收回', '确认删除后给出语义色的轻提示']
    }
  ]
});

DATA.push({
  id: 'overlays', name: '浮层', en: 'Overlays',
  ic: '<path d="M12 2.5 2.5 7.5 12 12.5l9.5-5z"/><path d="M2.5 16.5 12 21.5l9.5-5M2.5 12 12 17l9.5-5"/>',
  items: [
    {
      n: '底部抽屉', en: 'Bottom Sheet', k: '上滑就位 · 抓手示意',
      d: '自底部上滑的临时面板，顶带抓手示意可下滑。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <button class="gbtn primary" data-loc="sheet">拉起底部抽屉</button>
        <span class="kbd-hint">点遮罩或「取消」可收起</span></div>
        <div class="loc-ov" data-loc-dim></div>
        <div class="loc-sheet">
          <div class="ls-grab"></div>
          <h5>导出当前视图</h5>
          <p>选择导出格式，生成的文件会保存到下载目录。</p>
          <div class="ls-acts">
            <button class="gbtn sm ghost" data-loc-close>取消</button>
            <button class="gbtn sm primary" data-loc-close data-toast data-msg="已开始导出">导出 PDF</button></div></div>`,
      v: ['面板顶部一枚圆角抓手，暗示可以下拉关闭', '内部：标题、说明、等分的操作按钮行'],
      m: ['打开时面板自底部上滑就位，带减速曲线与遮罩淡入', '关闭时反向下滑，遮罩随之淡出', '点击遮罩、取消键或按 Esc 均可收起']
    },
    {
      n: '侧边抽屉', en: 'Drawer', st: 'tall', k: '侧向滑入 · 菜单级联',
      d: '从右侧滑入的导航面板，菜单项级联入场。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <button class="gbtn primary" data-loc="side">打开侧边抽屉</button>
        <span class="kbd-hint">常用于筛选、目录或详情</span></div>
        <div class="loc-ov" data-loc-dim></div>
        <div class="loc-side">
          <h5>筛选条件</h5>
          <div class="ls-nav">
            <button class="on">全部组件</button>
            <button>仅按钮类</button>
            <button>仅动效类</button>
            <button>移动端适配</button></div>
          <button class="gbtn sm primary" style="margin-top:auto" data-loc-close data-toast data-msg="筛选已应用">应用筛选</button></div>`,
      v: ['面板占据右侧约三分之二宽度，左边留出遮罩可点关', '内部为竖排菜单与底部固定操作'],
      m: ['打开时自右侧滑入，遮罩同步淡入', '菜单项以级联延迟逐条滑入', '关闭时反向退出，Esc 与遮罩均可收起']
    },
    {
      n: '图片灯箱', en: 'Lightbox', st: 'tall', k: '缩放浮现 · 说明跟入',
      d: '聚焦查看大图，内容自中心缩放浮现。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <button class="gbtn primary" data-loc="ov">查看大图</button>
        <span class="kbd-hint">点击遮罩关闭</span></div>
        <div class="loc-ov">
          <div class="loc-lb-art">
            <span class="art-glow"></span><span class="art-shape"></span></div>
          <div class="loc-lb-cap">
            <span>液态玻璃材质研究 · 03</span>
            <button data-loc-close aria-label="关闭">✕</button></div></div>`,
      v: ['遮罩聚焦视线，画面主体从中心放大呈现', '下方一行说明文字与关闭键，随画面一同入场'],
      m: ['打开时画面自缩小状态放大就位，带轻微回弹', '说明行延迟一拍自下方浮入', '关闭时整体快速淡出，遮罩随之消散']
    },
    {
      n: '上下文菜单', en: 'Context Menu', k: '光标锚定 · 按下即现',
      d: '在目标区域右键，菜单在光标处锚定出现。',
      h: `<div class="ctx-zone" data-ctx>在此区域点击右键<br><small style="opacity:.7">（触屏可长按替代）</small></div>
        <div class="ctx-menu">
          <button data-toast data-msg="已复制链接">⧉ 复制链接</button>
          <button data-toast data-msg="已加入收藏">☆ 加入收藏</button>
          <button data-toast data-msg="正在打开新窗口…">↗ 新窗口打开</button>
          <hr>
          <button class="dgr" data-toast data-msg="已删除（演示）" data-type="err">⌫ 删除</button></div>`,
      v: ['紧凑的玻璃面板，条目左图标右文字（可选）', '破坏性条目与常规条目之间以细分隔线断开'],
      m: ['在光标位置锚定出现，带缩放浮现与原点对齐的展开感', '超出容器边界时自动收回到安全区内', '点击任意条目或空白处即收起']
    },
    {
      n: '分享面板', en: 'Share Sheet', st: 'tall', k: '图标阵列 · 逐个弹入',
      d: '目标渠道以图标阵列呈现，逐个弹入。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
        <button class="gbtn primary" data-loc="ov">打开分享面板</button></div>
        <div class="loc-ov">
          <div class="loc-panel">
            <div class="share-ic">
              <span class="si si1"><i>💬</i>信息</span>
              <span class="si si2"><i>🔗</i>链接</span>
              <span class="si si3"><i>✦</i>社区</span>
              <span class="si si4"><i>✉</i>邮件</span>
              <span class="si si5"><i>⋯</i>更多</span></div>
            <button class="gbtn sm ghost" style="margin-top:16px;width:100%" data-loc-close>取消</button></div></div>`,
      v: ['大圆角玻璃面板，上半部是图标+文字的目标渠道阵列', '每枚图标是彩色圆角方块，占位清晰'],
      m: ['面板自下方缩放浮现，图标以级联延迟逐个弹入', '悬停单个渠道时上浮放大，文字点亮', '取消键收起面板并淡出遮罩']
    },
    {
      n: '全屏菜单', en: 'Fullscreen Menu', k: '汉堡形变 · 链接级联',
      d: '汉堡图标形变为关闭叉，全屏链接依次浮入。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <button class="burger" data-burger aria-label="全屏菜单"><i></i></button>
        <span class="kbd-hint">点击展开全屏导航（本页真实可用）</span></div>`,
      v: ['触发器是三横线，展开后原位形变为叉号', '全屏遮罩之上是超大号的导航链接，纵向居中'],
      m: ['三横线以中线为轴旋转形变为叉号，两端对齐收拢', '遮罩模糊淡入，链接自下方依次浮入，带级联延迟', '再次点击或选择任一链接后整体收起']
    }
  ]
});
DATA.push({
  id: 'animation', name: '动效', en: 'Motion',
  ic: '<path d="M13 2.5 4 14h7l-1 7.5L20 10h-7z"/>',
  items: [
    {
      n: '交错入场', en: 'Stagger', k: '级联延迟 · 弹性落位',
      d: '一组元素按序入场，像被依次摆放到位。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:16px">
        <div class="stag">
          <span class="sg-it">草稿</span><span class="sg-it">评审中</span><span class="sg-it">已通过</span>
          <span class="sg-it">待发布</span><span class="sg-it">已上线</span></div>
        <button class="replay" data-replay="stag">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 11.5A8.5 8.5 0 1 0 18 17"/><path d="M20 5v6h-6"/></svg>
          重播入场</button></div>`,
      v: ['一行等大的胶囊单元，初始时完全隐藏', '入场后与普通标签无异，动效只发生一次'],
      m: ['各单元以固定的小间隔依次入场，形成波次', '单个单元自下方缩放浮现，带过冲落位', '入场完成后静止；可手动重播观察节奏']
    },
    {
      n: '滚动显现', en: 'Scroll Reveal', k: '逐条浮起 · 滚动触发',
      d: '列表项滚动到视区时逐条浮起。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:16px;width:100%">
        <div class="rev-list">
          <div class="rev-it"><i></i>分析使用数据</div>
          <div class="rev-it"><i></i>梳理组件层级</div>
          <div class="rev-it"><i></i>补全动效参数</div>
          <div class="rev-it"><i></i>导出提示词</div></div>
        <button class="replay" data-replay="rev">重播序列</button></div>`,
      v: ['竖排的条目列表，每条一枚主题色圆点与一行文字', '初始态整体下沉并透明'],
      m: ['进入视区时逐条自下方浮起淡入，带级联延迟', '位移量克制，避免大幅飞入造成的躁动', '只触发一次，回滚不会反复播放']
    },
    {
      n: '磁吸按钮', en: 'Magnetic Button', k: '指针牵引 · 回中归位',
      d: '按钮被指针轻轻牵引，离开时弹回中心。',
      h: `<div class="mag-zone" data-magnetic><button class="mag">靠近我 →</button></div>`,
      v: ['一块醒目的渐变操作面，居中放置，四周留足牵引空间', '静止时与普通主按钮无异'],
      m: ['指针进入感应区时按钮朝指针方向位移，位移量小于指针实际距离，形成「被吸住」的黏性', '离开感应区时以弹簧曲线回到原位', '牵引过程不改变按钮自身的悬停样式，避免双重反馈']
    },
    {
      n: '形变色块', en: 'Morphing Blob', k: '不规则蠕动 · 悬停收圆',
      d: '静置时轮廓缓慢蠕动，悬停时收拢成正圆。',
      h: `<div class="morph">液态</div>`,
      v: ['一块持续微变形的有机色块，轮廓介于圆与鹅卵石之间', '悬停后收束为标准圆形并放大'],
      m: ['静置时轮廓关键帧缓慢循环蠕动，节奏像呼吸', '悬停时形变动画暂停，轮廓平滑收圆并放大、旋转', '移出后接回形变循环，不出现跳帧']
    },
    {
      n: '跑马灯', en: 'Marquee', k: '无缝循环 · 悬停暂停',
      d: '内容横向无缝循环，悬停即停。',
      h: `<div class="marq"><div class="marq-track">
        <span>液态玻璃</span><span>弹性曲线</span><span>镜面高光</span><span>层叠投影</span><span>微交互</span>
        <span>液态玻璃</span><span>弹性曲线</span><span>镜面高光</span><span>层叠投影</span><span>微交互</span></div></div>`,
      v: ['单行等宽文字序列，条目之间用小几何符号分隔', '两端用渐隐遮罩收边，不露出硬切口'],
      m: ['整条内容以恒定速度向左平移，首尾衔接无跳变', '悬停时暂停滚动，移出后继续', '速度保持匀速，避免加减速造成的拖拽感']
    },
    {
      n: '文字波浪', en: 'Kinetic Typography', k: '逐字波浪 · 循环起伏',
      d: '标题逐字起伏，像水面的波纹。',
      h: `<div class="kin"><span>液</span><span>态</span><span>玻</span><span>璃</span><span>动</span><span>效</span><span>参</span><span>考</span></div>`,
      v: ['一行大号粗体文字，逐字拆分为独立单元', '字色带极轻的渐变，增强厚度感'],
      m: ['每个字依次上浮再落回，形成连绵的波次', '上升时带轻微的旋转错位，落回时完全归位', '循环播放但节奏舒缓，不干扰阅读']
    },
    {
      n: '视差分层', en: 'Parallax', k: '分层深度 · 跟随指针',
      d: '三层内容以不同深度跟随指针，产生纵深。',
      h: `<div class="plx" data-parallax>
        <span class="plx-l plx-bg" data-depth="8"></span>
        <span class="plx-l plx-md" data-depth="18"></span>
        <span class="plx-l plx-fg" data-depth="34">3D</span></div>`,
      v: ['背景层是一块渐变面板，中层是半透明玻璃卡，前景是一枚立体圆钮', '三层各自带不同强度的投影，强化空间关系'],
      m: ['指针移动时各层朝指针方向位移，深度越大位移越大', '位移带平滑追随的惯性，不生硬跟手', '指针离开后各层缓缓归位']
    },
    {
      n: '数字滚动', en: 'Count Up', k: '缓出滚动 · 单位分色',
      d: '进入视口时数字从零滚动到目标值。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:18px">
        <div class="cnt">
          <span class="cnt-u"><b><span data-count="12480">0</span></b><span>累计组件</span></span>
          <span class="cnt-u"><b><span data-count="96.5" data-unit="%">0</span></b><span>满意度</span></span>
          <span class="cnt-u"><b><span data-count="8">0</span></b><span>分类体系</span></span></div>
        <button class="replay" data-replay="count">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 11.5A8.5 8.5 0 1 0 18 17"/><path d="M20 5v6h-6"/></svg>
          重播滚动</button></div>`,
      v: ['大号等宽数字居中，下方小号说明文字', '单位符号可用强调色区分于数字本体'],
      m: ['进入视口时数字以缓出曲线从零滚到目标值', '滚动过程中数字宽度稳定，不左右抖动', '滚动结束后定格，不重复播放']
    },
    {
      n: '倾斜卡片', en: 'Tilt Card', k: '透视跟随 · 扫光掠面',
      d: '卡片随指针做透视倾斜，表面有扫光。',
      h: `<div class="tilt" data-tilt>
        <span class="tl-chip">PREMIUM</span>
        <h5>跟随指针倾斜</h5>
        <p>在卡片上移动指针，观察透视与斜向扫光的配合。离开后平整归位。</p></div>`,
      v: ['带渐变底的玻璃卡，左上角一枚小标签，下方标题与说明', '表面藏一条斜向的高光带'],
      m: ['指针在卡面移动时卡片绕双轴做小幅透视倾斜', '扫光带在悬停期间自左向右掠过一次', '离开时卡片以弹性曲线回正，投影同步收敛']
    },
    {
      n: '光标辉光', en: 'Cursor Glow', k: '径向跟随 · 局部提亮',
      d: '一团柔光跟随指针在面板上移动。',
      h: `<div class="glow" data-glow>
        <b>光标辉光</b><span>在此面板内移动指针</span></div>`,
      v: ['低对比的底板，平时几乎只见边框与文字', '内部藏一团以指针为中心的径向柔光'],
      m: ['指针移动时柔光中心实时跟随，照亮局部内容', '悬停开始时柔光淡入，离开时淡出', '柔光用径向渐变实现，边缘自然消散无硬边']
    },
    {
      n: 'SVG 描边动画', en: 'Path Drawing', k: '路径描绘 · 收尾填色',
      d: '图形沿路径描绘而出，收尾轻染填色。',
      h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
        <svg class="pdraw" viewBox="0 0 170 110" fill="none" stroke="#6d7dff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 78 C40 30 70 20 85 45 C100 20 130 30 150 78" />
          <path d="M85 45 L85 96" stroke-width="3"/>
          <circle class="pd-fill" cx="85" cy="38" r="7" fill="#c44dff" stroke="none"/>
        </svg>
        <button class="replay" data-replay="path">重播描绘</button></div>`,
      v: ['单色线条图形，线宽一致、端点圆润', '收尾时核心节点获得一次填色点亮'],
      m: ['进入视区或点击重播时，各段路径依次描绘而出', '描绘使用缓出曲线，起笔快收笔稳', '描完后节点填色淡入，作为完成的句点']
    },
    {
      n: '弹簧拖拽', en: 'Spring Drag', k: '自由拖动 · 弹性归位',
      d: '小球可自由拖动，松手后弹回原位。',
      h: `<div class="drag-zone" data-drag>
        <div class="drag-ball">拖我</div>
        <span class="drag-hint">DRAG · RELEASE TO SNAP</span></div>`,
      v: ['容器是一块带虚线边界的活动区，小球居中静置', '小球是带高光与投影的立体圆钮'],
      m: ['按住后小球跟随指针位移，无延迟', '松手时以过冲明显的弹簧曲线弹回中心', '回弹过程带轻微的震荡，像被橡皮筋拉回']
    },
    {
      n: '点击涟漪', en: 'Ripple', k: '波纹扩散 · 按压缩放',
      d: '点击处涌出一圈波纹，向外扩散消散。',
      h: `<button class="ripple" data-ripple>点击涌出涟漪</button>`,
      v: ['常规的渐变主按钮，波纹层藏在文字之下', '波纹为半透明的圆形色斑'],
      m: ['在按下的坐标处生成一圈波纹，向四周扩散并淡出', '波纹半径超过按钮对角线，保证覆盖整个按压面', '按钮本体同时轻微缩小，与波纹形成合力']
    },
    {
      n: '翻转卡片', en: 'Flip Card', k: '双面翻转 · 背面揭示',
      d: '点击后绕纵轴翻到背面，揭示另一面内容。',
      h: `<div class="flip" data-flip>
        <div class="flip-in">
          <div class="face front"><b>点击翻转</b><span>FRONT · 正面</span></div>
          <div class="face back"><b>背面已就位</b><span>BACK · 反面信息</span></div></div></div>`,
      v: ['卡片有正反两面，各自独立成景，共用同一尺寸', '背面用实底强调色，与正面的玻璃感形成反差'],
      m: ['点击后卡片绕垂直轴翻转半周，使用带缓动的长过渡', '翻转期间两面均不可交互，避免中途换面', '再次点击翻回，双向一致']
    },
    {
      n: '撒花特效', en: 'Confetti', k: '碎片迸发 · 抛物散落',
      d: '关键动作达成时迸发一片彩色碎片。',
      h: `<div class="conf-zone">
        <button class="conf-btn" data-confetti>🎉 点击庆祝</button>
        <span class="kbd-hint">适合用在任务完成、发送成功之后</span></div>`,
      v: ['中央一枚庆典按钮，碎片是小尺寸的矩形彩纸', '碎片取色于整套主题的强调色系，不引入新色'],
      m: ['点击时从按钮位置向四周迸发一批碎片', '每片沿各自的抛物轨迹旋转散落，逐渐淡出', '整场在一秒出头内结束，只在达成时刻使用一次']
    }
  ]
});

DATA.push({
  id: 'scenes', name: '场景组合', en: 'Scenes',
  ic: '<rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2.2"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="2.2"/><rect x="3.5" y="13" width="7.5" height="7.5" rx="2.2"/><rect x="13" y="13" width="7.5" height="7.5" rx="2.2"/>',
  items: [
    {
      n: '下拉刷新', en: 'Pull to Refresh', k: '阻尼跟随 · 松手加载',
      d: '列表下拉时阻尼跟随，越过阈值松手即刷新。',
      h: `<div class="pull" data-pull>
        <div class="pull-ind"><span class="pi-ring"></span></div>
        <div class="pull-body">
          <div class="pr-row"><i>◈</i><div>晨间简报已生成<span>07:30 · 自动摘要</span></div></div>
          <div class="pr-row"><i>⬡</i><div>3 个组件待评审<span>昨天 · 团队协作</span></div></div>
          <div class="pr-row"><i>✦</i><div>新版本 v2.4 可用<span>2 天前 · 更新日志</span></div></div>
        </div></div>`,
      v: ['一块可滚动的列表面板，顶部藏一个居中的环形指示器', '指示器平时停在可视区之外'],
      m: ['下拉时内容区带阻尼地跟随指针下移，指示器同步露出', '超过阈值后指示器点亮，提示松手即可刷新', '松手后内容归位、指示器旋转加载，完成后给出刷新成功的轻提示']
    },
    {
      n: '侧滑操作', en: 'Swipe Action', k: '横向揭示 · 阈值吸附',
      d: '列表项左滑揭示编辑与删除，越阈值即吸附。',
      h: `<div class="swipe" data-swipe>
        <div class="sw-acts">
          <button class="sw-edit">编辑</button>
          <button class="sw-del">删除</button></div>
        <div class="sw-front">
          <span class="sw-ic">◈</span>
          <div><b>季度复盘草稿</b><span>最后编辑 · 2 小时前</span></div>
          <span class="sw-dots">•••</span></div></div>`,
      v: ['底层是两个等宽的动作色块（编辑、删除）', '上层是与普通列表一致的玻璃行，可横向拖动'],
      m: ['拖动时表层跟手位移，露出下方动作', '超过一半阈值松手即吸附到全开，否则回弹闭合', '点选任一动作后自动闭合行并给出反馈']
    },
    {
      n: '长按菜单', en: 'Long-press Menu', k: '按住蓄力 · 浮出菜单',
      d: '按住一段时间蓄力，随后浮出快捷菜单。',
      h: `<div class="lp-zone" data-lp>
        <span class="lp-ring"></span>
        <b>按住这里不放</b>
        <small>约半秒后浮出菜单 ·（长按响应触控笔与鼠标）</small>
        <div class="lp-menu">
          <button>⧉ 复制</button>
          <button>☆ 收藏</button>
          <button>↗ 分享</button>
          <button style="color:var(--dgr)">⌫ 删除</button></div></div>`,
      v: ['一块大面积的按压热区，中央是操作提示文案', '菜单为居中的玻璃小面板，条目紧凑'],
      m: ['按下时先跑一圈蓄力环，作为长按的进度反馈', '蓄力完成的瞬间菜单自中心缩放浮现，可伴一次轻微振动反馈', '期间移动过远则取消蓄力，不误触']
    },
    {
      n: '拖拽排序', en: 'Drag to Sort', k: '拖起让位 · 实时重排',
      d: '抓住条目拖动，其余条目实时让位重排。',
      h: `<div class="dnd">
        <div class="dnd-i" draggable="true"><span class="dnd-grip"><i></i><i></i><i></i></span><b>首页仪表盘</b><span class="dnd-no">1</span></div>
        <div class="dnd-i" draggable="true"><span class="dnd-grip"><i></i><i></i><i></i></span><b>数据洞察页</b><span class="dnd-no">2</span></div>
        <div class="dnd-i" draggable="true"><span class="dnd-grip"><i></i><i></i><i></i></span><b>组件文档</b><span class="dnd-no">3</span></div>
        <div class="dnd-i" draggable="true"><span class="dnd-grip"><i></i><i></i><i></i></span><b>设置中心</b><span class="dnd-no">4</span></div></div>`,
      v: ['每行左侧是六点抓手、中间是名称、右侧是序号章', '行样式与普通列表一致，降低学习成本'],
      m: ['拖起的条目降到半透明并带虚线边，表示「在手上」', '指针经过其他条目时，该条目亮起让位边框，列表实时插入重排', '放下后新序号立即刷新，行以短促的缩放入场']
    },
    {
      n: '聊天气泡', en: 'Chat Bubbles', k: '气泡落座 · 输入中跳动',
      d: '对话气泡逐条落座，对方输入时三点跳动。',
      h: `<div class="chat">
        <span class="chat-time">今天 14:02</span>
        <div class="cb them">这个按钮的悬停反馈是不是太快了？</div>
        <div class="cb me">我把缓动调慢了一档，你再试试。</div>
        <div class="cb them">顺滑多了 👌</div>
        <div class="typing" aria-label="对方正在输入"><i></i><i></i><i></i></div></div>`,
      v: ['对方气泡为浅底左对齐，自己气泡为强调渐变右对齐', '两侧圆角不对称，气泡「尾巴」指向说话方'],
      m: ['气泡依次自下方缩放落座，带级联延迟', '「正在输入」的三点持续跳动，形成波次', '气泡落座后不再晃动，保持阅读稳定']
    },
    {
      n: '音乐播放器', en: 'Music Player', k: '封面旋转 · 进度流淌',
      d: '播放时封面旋转、进度条持续流淌。',
      h: `<div class="player">
        <div class="pl-top">
          <span class="pl-cover"></span>
          <div class="pl-meta"><b>Liquid Interface</b><span>Motion Ensemble · 3:42</span></div></div>
        <div class="pl-bar"><i></i></div>
        <div class="pl-time"><span>1:16</span><span>3:42</span></div>
        <div class="pl-ctrl">
          <button aria-label="上一首"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.5h2.2v13H6zM19 5.5v13L9.5 12z"/></svg></button>
          <button class="pl-play" data-play aria-label="播放/暂停">
            <svg class="ico-play" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
            <svg class="ico-pause" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.4v14H7zM13.6 5H17v14h-3.4z"/></svg></button>
          <button aria-label="下一首"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M15.8 5.5H18v13h-2.2zM5 5.5 14.5 12 5 18.5z"/></svg></button>
        </div></div>`,
      v: ['左侧方形圆角封面（中央留唱片孔），右侧曲名与艺人', '下方细进度条、时间读数与三枚播放控制'],
      m: ['播放时封面缓慢匀速旋转，暂停时停在当前角度', '进度条随播放持续向前流淌，悬停浮出定位圆点', '播放键在播放/暂停两态间切换图标']
    },
    {
      n: '设置列表', en: 'Settings List', k: '分组行 · 开关就位',
      d: '系统设置风格的分组行，行内直接承载开关。',
      h: `<div class="setlist">
        <div class="sl-row"><span class="sl-ic c1">✦</span>
          <div class="sl-tx"><b>液态玻璃效果</b><span>为界面添加通透的玻璃质感</span></div>
          <button class="gsw on" data-sw aria-label="液态玻璃效果"></button></div>
        <div class="sl-row"><span class="sl-ic c2">◐</span>
          <div class="sl-tx"><b>跟随系统主题</b><span>自动在深浅两套主题间切换</span></div>
          <button class="gsw on" data-sw aria-label="跟随系统主题"></button></div>
        <div class="sl-row"><span class="sl-ic c3">〜</span>
          <div class="sl-tx"><b>减弱动态效果</b><span>在晕动敏感时关闭非必要动画</span></div>
          <button class="gsw" data-sw aria-label="减弱动态效果"></button></div>
        <div class="sl-row"><span class="sl-ic c4">◈</span>
          <div class="sl-tx"><b>高级偏好</b><span>触感、通知与导出</span></div>
          <svg class="sl-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg></div>
      </div>`,
      v: ['分组容器内若干等高行：彩色图标章、双行文案、行尾控件', '行间以细线分隔，行尾控件在开关与箭头间切换'],
      m: ['悬停行时整行点亮浅强调底', '行尾箭头在悬停时右移半步', '开关复用弹簧滑块的全部动效']
    },
    {
      n: '评价轮播', en: 'Testimonial Carousel', k: '自动轮播 · 星级并列',
      d: '用户评价自动轮播，可点指示点切换。',
      h: `<div class="tcar">
        <div class="tcard on">
          <div class="t-stars">★★★★★</div>
          <p>「提示词不锁颜色这一点太关键了，同一套描述在我们的设计体系里直接能用。」</p>
          <div class="t-who"><i class="av1">许</i><div><b>许知微</b><span>产品负责人 · Lumen</span></div></div></div>
        <div class="tcard">
          <div class="t-stars">★★★★★</div>
          <p>「每个组件都能直接上手试，动效参数一看就懂，不用再猜 AI 会给什么。」</p>
          <div class="t-who"><i class="av3">郑</i><div><b>郑述</b><span>前端工程师 · North</span></div></div></div>
        <div class="tcard">
          <div class="t-stars">★★★★☆</div>
          <p>「从按钮到场景全覆盖，做 MVP 的时候基本照着抄一遍就齐了。」</p>
          <div class="t-who"><i class="av4">岑</i><div><b>岑鹿</b><span>独立开发者</span></div></div></div>
        <div class="t-dots">
          <button class="on" data-tdot="0" aria-label="第1条"></button>
          <button data-tdot="1" aria-label="第2条"></button>
          <button data-tdot="2" aria-label="第3条"></button></div></div>`,
      v: ['固定高度的卡片窗，评价内容在窗内切换', '星级、引言、评价人三段纵排，底部一排指示点'],
      m: ['自动按固定节奏轮播，当前条淡出下沉、新条淡入浮起', '点击指示点立即切换并重置计时', '指示点的当前项拉长为胶囊，与分段控制器同语言']
    }
  ]
});
/* ===== 补充组件（对照参考文档补齐缺口） ===== */
DATA.find(c => c.id === 'forms').items.push(
  {
    n: '展开式搜索框', en: 'Expandable Search', k: '图标收起 · 聚焦展开',
    d: '收起时只是一枚放大镜，聚焦后展开成完整搜索框。',
    h: `<label class="xsrch">
      <svg class="xs-ic" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.2-4.2"/></svg>
      <input placeholder="搜索组件、动效、场景…" aria-label="展开式搜索"></label>`,
    v: ['收起态是一枚小胶囊，只露出一枚放大镜图标', '展开态变为完整输入框，图标自然成为前缀', '容器宽度变化时内部文字不会挤压换行'],
    m: ['聚焦时容器宽度平滑增长到完整尺寸，采用较长的缓动曲线', '边框点亮并出现外圈柔光', '失焦后收缩回图标态，内容为空时无残留形变']
  },
  {
    n: '日期选择器', en: 'Date Picker', k: '锚点弹层 · 月份切换',
    d: '点击呼出日历弹层，选中日期回写输入并可切换月份。',
    h: `<div class="dp">
      <button class="dp-input" data-dp>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></svg>
        <span data-dp-val>选择日期</span>
        <svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
      <div class="dp-pop" data-dp-pop>
        <div class="cal" data-cal data-y="2026" data-m="9" data-sel="15">
          <div class="cal-top"><b data-cal-label>2026 年 10 月</b>
            <div><button data-calnav="-1" aria-label="上月">‹</button><button data-calnav="1" aria-label="下月">›</button></div></div>
          <div class="cal-grid"></div></div></div></div>`,
    v: ['触发器是带日历图标与箭头的玻璃胶囊', '弹层复用日历的网格语言，今日与选中日各有标记'],
    m: ['点击时弹层自触发器下方缩放浮现', '日期格悬停弹起；选中后高亮锚定，输入框文案同步回写', '前后月箭头即时重排整月网格，跨年月份正确滚动']
  }
);

DATA.find(c => c.id === 'data').items.push(
  {
    n: '描述列表', en: 'Descriptions', k: '键值成对 · 列对齐',
    d: '成对展示属性信息，详情页与元数据的骨架。',
    h: `<div class="dl">
      <div class="dl-row"><span class="dl-k">项目名称</span><span class="dl-v">液态玻璃组件库</span></div>
      <div class="dl-row"><span class="dl-k">当前版本</span><span class="dl-v">v2.4.0</span></div>
      <div class="dl-row"><span class="dl-k">负责人</span><span class="dl-v">林晓岸</span></div>
      <div class="dl-row"><span class="dl-k">状态</span><span class="dl-v"><span class="bdg ok" style="padding:2px 9px;font-size:10.5px"><i></i>运行中</span></span></div>
    </div>`,
    v: ['两列结构：左列键名用等宽小字弱化，右列值为主字色', '行间以细分隔线断开，值区可嵌入徽标等控件'],
    m: ['行悬停时整行点亮浅强调底', '值区的语义徽标保留自身的呼吸动效']
  }
);

DATA.find(c => c.id === 'overlays').items.push(
  {
    n: '气泡确认', en: 'Popconfirm', k: '锚点浮出 · 就地确认',
    d: '不打断流程的轻量二次确认，锚定在触发器下方。',
    h: `<div class="popw">
      <button class="gbtn dgr sm" data-pop>删除这条记录</button>
      <div class="pop">
        <b>确定要删除吗？</b>
        <p>删除后不可恢复，相关引用会一并失效。</p>
        <div class="pop-acts">
          <button class="gbtn sm ghost" data-pop-close>取消</button>
          <button class="gbtn sm dgr" data-pop-close data-msg="记录已删除" data-type="err">删除</button></div></div></div>`,
    v: ['结构与弹出气泡一致：玻璃面板 + 指向三角', '内部为一句确认文案与「取消 / 破坏性确认」双按钮'],
    m: ['点击触发器在下方锚点缩放浮出', '确认后收起并给出语义色轻提示；取消或点外部即收起']
  }
);

DATA.find(c => c.id === 'animation').items.push(
  {
    n: '打字机效果', en: 'Typewriter', k: '逐字出现 · 光标闪烁',
    d: '文字逐字打出，停顿后删除换句，循环播放。',
    h: `<div class="type-box"><span data-typer></span><span class="type-cursor"></span></div>`,
    v: ['等宽字体的深色文本区，末尾一枚竖条方块光标', '光标以两段式闪烁，像终端输入'],
    m: ['句子逐字出现，打完整句后停顿，再逐字删除', '删除速度明显快于输入，换下一句循环', '整体节奏稳定，不干扰旁侧内容的阅读']
  }
);

DATA.find(c => c.id === 'scenes').items.push(
  {
    n: '登录卡片', en: 'Login Card', k: '表单组合 · 成套面板',
    d: '品牌区、表单与第三方入口组成的完整登录面板。',
    h: `<div class="login-card">
      <span class="lg-mark">◈</span>
      <h5>欢迎回来</h5><p>登录以继续你的工作区</p>
      <div class="fld" style="width:100%"><input placeholder=" " type="email"><label>邮箱地址</label></div>
      <div class="pw" style="width:100%"><input type="password" placeholder="输入密码" aria-label="密码"></div>
      <button class="gbtn primary" style="width:100%" data-toast data-msg="登录成功（演示）">登 录</button>
      <div class="lg-div"><span>或使用</span></div>
      <div class="lg-third">
        <button class="gbtn sm ghost" data-toast data-msg="正在跳转 GitHub…">GitHub</button>
        <button class="gbtn sm ghost" data-toast data-msg="正在跳转 Google…">Google</button></div>
    </div>`,
    v: ['竖排玻璃面板：品牌章、欢迎语、两个输入、主按钮、分隔线、第三方入口', '输入复用浮动标签与密码框的全部语言'],
    m: ['各元素以短促的级联延迟入场', '按钮、输入、密码显隐各自保留原有的交互动效', '第三方按钮为次级样式，不与主按钮争夺层级']
  }
);

DATA.push({
  id: 'layout', name: '版式内容', en: 'Layout & Content',
  ic: '<rect x="3.5" y="4" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5V20"/>',
  items: [
    {
      n: '价格卡片', en: 'Pricing Card', k: '套餐对比 · 悬浮抬升',
      d: '套餐对比的转化卡片，推荐款带角标与主题描边。',
      h: `<div class="price hot">
        <span class="price-rib">最受欢迎</span>
        <h4>专业版</h4>
        <div class="price-num">¥29<small>/月</small></div>
        <ul><li>无限项目</li><li>团队协作</li><li>优先支持</li></ul>
        <button class="gbtn primary sm" style="width:100%" data-toast data-msg="已选择专业版套餐">立即升级</button></div>`,
      v: ['套餐名、大号价格、周期小字、功能清单、全宽按钮五段纵排', '推荐款带主题描边、顶部淡强调渐变与斜置角标'],
      m: ['悬停整卡上浮、投影加深', '角标为固定斜条，入场时可自边缘滑入', '清单每项前置成功色勾号，对齐成列']
    },
    {
      n: '特性列表', en: 'Feature Item', k: '图标章旋出 · 行右移',
      d: '图标 + 标题 + 描述的特性条目，悬停行右移、图标翻色。',
      h: `<div style="display:flex;flex-direction:column;gap:6px;width:100%;max-width:280px">
        <div class="feature"><span class="fe-ic">⚡</span><div><b>极速构建</b><span>基于 Vite，冷启动不到 1 秒</span></div></div>
        <div class="feature"><span class="fe-ic">◈</span><div><b>设计一致</b><span>全站令牌统一，改一处全站生效</span></div></div>
        <div class="feature"><span class="fe-ic">⬡</span><div><b>开箱即用</b><span>复制提示词即可生成同款组件</span></div></div></div>`,
      v: ['左侧圆角图标章承载符号，右侧标题与描述两级文案', '未悬停时行是透明的，靠留白维持节奏'],
      m: ['悬停整行点亮浅底并向右平移一小段', '图标章翻转为主题实底反白，并轻微旋转放大']
    },
    {
      n: '首屏区块', en: 'Hero Section', k: '渐变主视觉 · 呼吸光晕',
      d: '网站第一屏的主张区：眉题、大标题、副文与主 CTA。',
      h: `<div class="hero-demo">
        <span class="hd-eyebrow">全新上线</span>
        <div class="hd-title">让想法 5 分钟上线</div>
        <p class="hd-sub">拖拽即可完成页面搭建，无需写一行代码</p>
        <button class="gbtn sm" style="background:#fff;color:var(--acc);box-shadow:0 8px 20px -10px rgba(0,0,0,.5)" data-toast data-msg="欢迎开始（演示）">免费开始 →</button></div>`,
      v: ['强调渐变铺底的圆角面板，内容全部居中', '眉题为半透明白底胶囊，标题最大、副文次之、CTA 反白'],
      m: ['右上角一层径向高光做缓慢的呼吸明灭', 'CTA 悬停上浮，按压回弹', '入场时整体自下方轻浮就位']
    },
    {
      n: '内容卡片', en: 'Content Card', k: '图文卡片 · 悬浮描边',
      d: '图文结构的文章/资源卡片，媒体区带分类角标。',
      h: `<div class="ccard">
        <div class="cc-media"><span class="cc-tag">指南</span></div>
        <div class="cc-body">
          <h5>如何写出不锁风格的提示词</h5>
          <p>只描述质感与运动意图，把设计令牌交给生成方推导。</p>
          <div class="cc-foot"><span class="av av3" style="width:22px;height:22px;font-size:9px;border:none;margin:0">林</span><span>林晓岸 · 6 分钟阅读</span></div></div></div>`,
      v: ['上媒体下内容的两段式结构，媒体区为渐变占位并带分类角标', '底部一行作者头像与元信息'],
      m: ['悬停整卡上浮、边框点亮，媒体区轻微放大裁切缩放', '角标为玻璃底小胶囊，压在媒体区左上']
    },
    {
      n: '引用卡片', en: 'Quote Card', k: '引号装饰 · 悬停抬升',
      d: '带大引号装饰的单条用户评价卡。',
      h: `<div class="qcard">
        <span class="qc-mark">“</span>
        <p>这套组件库帮我两天就搭完了官网，同事都以为我请了设计师。</p>
        <div class="qc-who"><span class="av av4" style="width:34px;height:34px;font-size:12px;border:none;margin:0">李</span>
          <div><b>李小明</b><span>独立开发者</span></div></div></div>`,
      v: ['左上一枚超大引号字符作装饰，低透明度强调色', '正文两级灰度，底部头像 + 姓名 + 身份'],
      m: ['悬停整卡上浮、边框点亮', '引号入场时自上方落座，正文随后淡入']
    }
  ]
});
DATA.push({
  id: 'anatomy', name: '界面术语', en: 'UI Anatomy',
  ic: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3.5M12 18v3.5M2.5 12h3.5M18 12h3.5"/>',
  items: [
    {
      n: '界面部位命名图', en: 'UI Parts Glossary', k: '部位标注 · 专业命名', wide: true,
      d: '点选左图标记或右表行目，查看每个部位的中英文专业名称与定义。',
      h: `<div class="anat">
        <div class="anat-map">
          <div class="a-rail" data-anat-zone="8"></div>
          <div class="a-top" data-anat-zone="3">
            <span class="a-logo" data-anat-zone="1"></span>
            <span class="a-word" data-anat-zone="2">Liquid Glass</span>
            <span class="a-search" data-anat-zone="4"></span>
            <span class="a-kbd" data-anat-zone="5">⌘K</span>
            <span class="a-theme" data-anat-zone="6"></span>
          </div>
          <div class="a-body">
            <div class="a-side" data-anat-zone="7"><i></i><i></i><i></i><i></i></div>
            <div class="a-main">
              <div class="a-hero" data-anat-zone="9">
                <span class="a-eyebrow" data-anat-zone="10">REFERENCE</span>
                <b>首屏主张区</b>
                <div class="a-stats" data-anat-zone="19"><i></i><i></i><i></i></div></div>
              <div class="a-sec" data-anat-zone="11"><b>01 分区标题</b><span></span><em data-anat-zone="23">10</em></div>
              <div class="a-card" data-anat-zone="12">
                <div class="a-stage" data-anat-zone="13">组件预览画布</div>
                <div class="a-meta" data-anat-zone="14">
                  <b>卡片标题行 <em class="a-en" data-anat-zone="24">PRIMARY BUTTON</em></b><span class="a-line"></span>
                  <div class="a-acts" data-anat-zone="15"><span class="a-pbtn">AI 提示词 ⌄</span><span class="a-k2">弹簧回弹</span></div>
                </div>
                <div class="a-drawer" data-anat-zone="16">▍组件 · 提示词全文
                  <span class="a-opts" data-anat-zone="21">技术栈 · 风格 · 主题</span>
                  <em class="a-chip" data-anat-zone="17">React + Tailwind</em>
                  <em class="a-copy" data-anat-zone="22">复制</em></div>
              </div>
            </div>
          </div>
          <div class="a-foot" data-anat-zone="20">Liquid Glass · 本地组件库</div>
          <div class="a-toast" data-anat-zone="18">操作成功</div>
        </div>
        <div class="anat-terms">
          <div class="anat-detail" data-anat-detail></div>
          <div class="anat-rows">
            <button class="anat-row" data-anat-row="1" data-cn="品牌标识" data-en="Brand Mark" data-desc="顶栏最左侧的图形符号，是产品身份的最小识别单元，通常与字标成组出现，合称 Logo 组合（Logo Lockup）。"><span class="ar-t"><b>01</b>品牌标识</span><span class="ar-en">Brand Mark</span></button>
            <button class="anat-row" data-anat-row="2" data-cn="字标" data-en="Wordmark" data-desc="与品牌标识并排的文字名称，字重、字距经过专门调整，与标识共同构成完整的 Logo。"><span class="ar-t"><b>02</b>字标</span><span class="ar-en">Wordmark</span></button>
            <button class="anat-row" data-anat-row="3" data-cn="顶栏" data-en="App Bar" data-desc="悬浮于页面顶部的全局栏，承载品牌、搜索与系统操作，滚动全程保持可达，也称 Top Bar。"><span class="ar-t"><b>03</b>顶栏</span><span class="ar-en">App Bar</span></button>
            <button class="anat-row" data-anat-row="4" data-cn="搜索框" data-en="Search Field" data-desc="顶栏中的检索入口，聚焦时扩展并给出结果或快捷键提示，是全局导航的补充路径。"><span class="ar-t"><b>04</b>搜索框</span><span class="ar-en">Search Field</span></button>
            <button class="anat-row" data-anat-row="5" data-cn="快捷键提示" data-en="Shortcut Hint" data-desc="标注键盘组合键（如 ⌘K）的小标签，向熟练用户暴露更快的操作路径，也称 Kbd / Hotkey Hint。"><span class="ar-t"><b>05</b>快捷键提示</span><span class="ar-en">Shortcut Hint</span></button>
            <button class="anat-row" data-anat-row="6" data-cn="主题切换" data-en="Theme Toggle" data-desc="在深色与浅色两套外观间切换的控件，专业名也叫外观切换（Appearance Toggle）。"><span class="ar-t"><b>06</b>主题切换</span><span class="ar-en">Theme Toggle</span></button>
            <button class="anat-row" data-anat-row="7" data-cn="侧边目录" data-en="Table of Contents" data-desc="页面级分区索引，滚动时高亮当前分区，这一机制称为滚动监听（Scrollspy）。"><span class="ar-t"><b>07</b>侧边目录</span><span class="ar-en">Table of Contents</span></button>
            <button class="anat-row" data-anat-row="8" data-cn="阅读进度条" data-en="Scroll Progress" data-desc="页面顶部的细进度线，反馈长页面的阅读位置，属于全局状态反馈（Global Status）。"><span class="ar-t"><b>08</b>阅读进度条</span><span class="ar-en">Scroll Progress</span></button>
            <button class="anat-row" data-anat-row="9" data-cn="首屏区块" data-en="Hero Section" data-desc="进入页面后的第一块主视觉区，承载核心价值主张与主行动号召（Primary CTA）。"><span class="ar-t"><b>09</b>首屏区块</span><span class="ar-en">Hero Section</span></button>
            <button class="anat-row" data-anat-row="10" data-cn="眉题" data-en="Eyebrow Label" data-desc="标题上方的小号引导标签，用于标注栏目、系列或状态，因位置像眉毛而得名。"><span class="ar-t"><b>10</b>眉题</span><span class="ar-en">Eyebrow Label</span></button>
            <button class="anat-row" data-anat-row="11" data-cn="分区标题" data-en="Section Header" data-desc="由编号、中文标题、英文名与计数构成的分区锚点行，划分页面内容结构。"><span class="ar-t"><b>11</b>分区标题</span><span class="ar-en">Section Header</span></button>
            <button class="anat-row" data-anat-row="12" data-cn="组件卡片" data-en="Component Card" data-desc="单个组件的展示容器，标准三段式：预览画布、信息区、提示词抽屉。"><span class="ar-t"><b>12</b>组件卡片</span><span class="ar-en">Component Card</span></button>
            <button class="anat-row" data-anat-row="13" data-cn="预览画布" data-en="Preview Stage" data-desc="卡片上半部的实时演示区域，点阵底纹用于对齐感知，也叫 Demo Canvas。"><span class="ar-t"><b>13</b>预览画布</span><span class="ar-en">Preview Stage</span></button>
            <button class="anat-row" data-anat-row="14" data-cn="卡片标题行" data-en="Card Header" data-desc="承载组件的中文标准名、英文标准名与目录编号的一行，是卡片的信息锚点。"><span class="ar-t"><b>14</b>卡片标题行</span><span class="ar-en">Card Header</span></button>
            <button class="anat-row" data-anat-row="15" data-cn="操作行" data-en="Card Actions" data-desc="描述文字与「AI 提示词」入口所在的交互行，右侧常附动效关键词标签。"><span class="ar-t"><b>15</b>操作行</span><span class="ar-en">Card Actions</span></button>
            <button class="anat-row" data-anat-row="16" data-cn="提示词抽屉" data-en="Prompt Drawer" data-desc="卡片下方展开的面板，承载提示词全文、生成选项与复制操作，属于渐进披露（Progressive Disclosure）。"><span class="ar-t"><b>16</b>提示词抽屉</span><span class="ar-en">Prompt Drawer</span></button>
            <button class="anat-row" data-anat-row="17" data-cn="选项芯片" data-en="Option Chip" data-desc="提示词配置中的可点选项，决定交给 AI 的技术栈、风格与主题，单选互斥、多选并存。"><span class="ar-t"><b>17</b>选项芯片</span><span class="ar-en">Option Chip</span></button>
            <button class="anat-row" data-anat-row="18" data-cn="轻提示" data-en="Toast" data-desc="出现在角落、自动消失的临时反馈条，专业名 Toast，也叫 Heads-up Notification。"><span class="ar-t"><b>18</b>轻提示</span><span class="ar-en">Toast</span></button>
            <button class="anat-row" data-anat-row="19" data-cn="统计指标" data-en="Stat / Statistic" data-desc="用大号数字快速传达核心量级的指标块，常与涨幅、迷你图表组合，仪表盘的基本单元。"><span class="ar-t"><b>19</b>统计指标</span><span class="ar-en">Stat</span></button>
            <button class="anat-row" data-anat-row="20" data-cn="页脚" data-en="Footer" data-desc="页面最底部的区域，承载版权信息、辅助链接与次级导航，是页面结构的收尾。"><span class="ar-t"><b>20</b>页脚</span><span class="ar-en">Footer</span></button>
            <button class="anat-row" data-anat-row="21" data-cn="选项组" data-en="Option Group" data-desc="提示词配置中一组相关选项的集合：单选组内互斥、多选组内并存，决定交给 AI 的生成参数。"><span class="ar-t"><b>21</b>选项组</span><span class="ar-en">Option Group</span></button>
            <button class="anat-row" data-anat-row="22" data-cn="复制按钮" data-en="Copy Button" data-desc="一键把内容写入剪贴板的操作，通常在成功时给出短暂的成功态与轻提示。"><span class="ar-t"><b>22</b>复制按钮</span><span class="ar-en">Copy Button</span></button>
            <button class="anat-row" data-anat-row="23" data-cn="分区计数" data-en="Section Count" data-desc="分区标题行里的条目数量标注，帮助读者预估该分区的内容规模。"><span class="ar-t"><b>23</b>分区计数</span><span class="ar-en">Section Count</span></button>
            <button class="anat-row" data-anat-row="24" data-cn="英文标准名" data-en="Latin Name" data-desc="组件的英文行业名称，便于与国际设计文档、开源库与 AI 对齐语义。"><span class="ar-t"><b>24</b>英文标准名</span><span class="ar-en">Latin Name</span></button>
          </div>
        </div></div>`,
      v: ['左侧是页面构造的缩略图，各部位带可点的编号标记，标记选中时以强调描边与柔光高亮', '右侧是术语表与详情区：行目显示编号、中文专业名与英文标准名', '详情区展示当前选中部位的完整定义与别名'],
      m: ['点击图中标记或右侧行目，两侧同步切换选中状态', '详情区文字平滑更换，不闪烁跳变', '术语行悬停轻微上浮，提示可点；默认选中第一项作为引导']
    }
  ]
});
DATA.find(c => c.id === 'scenes').items.push(
  {
    n: '开屏引导卡片', en: 'Onboarding Card', k: '分页引导 · 页码圆点',
    d: 'PC 软件首启时的功能引导卡，行业称 Onboarding（首次运行引导），多页轮播形态即 Onboarding Carousel。',
    h: `<div class="onb" data-onb>
      <div class="onb-track" data-onb-track>
        <div class="onb-slide">
          <span class="onb-art">◈</span>
          <h5>欢迎使用 Liquid Glass</h5>
          <p>一套 iOS 液态玻璃风格的界面组件与动效参考库，共 8 大分类。</p></div>
        <div class="onb-slide">
          <span class="onb-art">✎</span>
          <h5>每个组件都能直接试</h5>
          <p>卡片里是真实可交互的活演示，不是截图，也不是占位图。</p></div>
        <div class="onb-slide">
          <span class="onb-art">✦</span>
          <h5>提示词一键复制</h5>
          <p>勾选技术栈与风格，把提示词复制给你的 AI 即可生成同款。</p></div>
      </div>
      <div class="onb-foot">
        <button class="onb-skip" data-onb-skip>跳过</button>
        <div class="onb-dots">
          <button class="on" data-onb-dot="0" aria-label="第 1 页"></button>
          <button data-onb-dot="1" aria-label="第 2 页"></button>
          <button data-onb-dot="2" aria-label="第 3 页"></button></div>
        <button class="gbtn sm primary" data-onb-next>继续</button>
      </div></div>`,
    v: ['竖排引导面板：插画章、标题、说明、底部导航区三段式', '底部为「跳过 — 页码圆点 — 主操作」的经典三段布局', '插画章悬浮微动，最后一页主按钮换为完成文案'],
    m: ['切换时整条轨道横向滑动，采用缓出曲线，内容始终整页对齐', '页码圆点当前项拉宽为胶囊并换强调色', '主按钮在中途显示「继续」、末页变为「开始使用」，完成时给出提示并回到首页态', '跳过等价于直接结束引导']
  }
);
/* ===== 滚动动效家族（Scroll Family） ===== */
DATA.find(c => c.id === 'animation').items.push(
  {
    n: '滚动联动显现', en: 'Scroll-driven Reveal', k: '滚动映射 · 连续进度',
    d: '滑到哪里就出现多少——入场进度由滚动位置连续驱动，业内称 Scroll-driven / Scroll-linked Animation。',
    h: `<div class="sdr" data-sdr>
      <div class="sdr-row"><b>01</b>滚动联动：透明度与位移随滚动连续插值</div>
      <div class="sdr-row"><b>02</b>不是「触发一次」，而是每一帧都跟随进度</div>
      <div class="sdr-row"><b>03</b>往回滚会同步退回，双向可逆</div>
      <div class="sdr-row"><b>04</b>等价于 CSS 新标准 scroll-driven animations</div>
      <div class="sdr-row"><b>05</b>常用于产品页的逐段揭示</div>
      <div class="sdr-row"><b>06</b>进度计算只依赖视口位置，性能友好</div>
      <div class="sdr-row"><b>07</b>试试在这个框里上下滚动</div></div>`,
    v: ['一个内部可滚动的列表容器，条目初始为低透明度并带下沉位移', '条目结构统一：编号章 + 一行说明'],
    m: ['条目的透明度与位移由其相对容器视口的位置连续计算，越接近可视区底部越完整显现', '回滚时进度反向退回，始终双向可逆', '每条的显影区间相互错开，形成「滑到哪、亮到哪」的推进感']
  },
  {
    n: '滚动触发', en: 'Scroll Trigger', k: '越过阈值 · 一次性触发',
    d: '滚动越过设定阈值时触发动画并保持结果，属 fire-once 型 Scroll Trigger。',
    h: `<div class="strig" data-strig>
      <div class="strig-hint">↓ 在框内向下滚动</div>
      <div class="strig-target"><span>✓</span><b>已触发</b><small>Scroll Trigger · fire once</small></div>
      <div class="strig-fill"></div><div class="strig-fill"></div><div class="strig-fill"></div>
      <div class="strig-fill"></div></div>
      <button class="replay" data-replay="strig">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 11.5A8.5 8.5 0 1 0 18 17"/><path d="M20 5v6h-6"/></svg>
        重置触发</button>`,
    v: ['容器顶部悬着一个待触发的目标章，下方是要滚过的占位内容', '目标未触发时是空心虚位，触发后填充对勾与标签'],
    m: ['scrollTop 越过阈值的瞬间播放一次爆发动画：缩放回弹 + 光环扩散', '触发后保持结果，不会来回闪烁', '可一键重置，回滚到顶部后再次滚动可复现']
  },
  {
    n: '视差滚动', en: 'Scroll Parallax', k: '差速位移 · 层深错动',
    d: '容器滚动时不同图层以不同速率位移，形成纵深视差。',
    h: `<div class="splx" data-splx>
      <div class="splx-bg" data-sdepth></div>
      <div class="splx-inner">
        <div class="splx-chip" data-sdepth2>视差层 · 慢速跟随</div>
        <div class="splx-line"></div><div class="splx-line w80"></div><div class="splx-line w60"></div>
        <div class="splx-line w90"></div><div class="splx-line w70"></div>
        <div class="splx-line w50"></div><div class="splx-block"></div>
        <div class="splx-line w80"></div><div class="splx-line w65"></div></div></div>`,
    v: ['滚动容器内叠两层：底层是大面积渐变色块，前景是内容与一枚浮动标签', '各层初始对齐，只有滚动时才显出速率差'],
    m: ['底层以约四成速率反向位移，前景标签以更慢速率跟随，内容正常滚动', '速率差制造出可感知的层深', '停止滚动瞬间定格，无惯性抖动']
  },
  {
    n: '吸顶', en: 'Sticky Top', k: '滚动粘附 · 停留顶部',
    d: '元素滚到容器顶部后粘住停留，即 position: sticky 的吸顶效果。',
    h: `<div class="sticky-demo">
      <div class="st-head">📌 分区标题（吸顶中）</div>
      <div class="st-row"><span>列表项 01</span><small>向下滚动看它被顶住</small></div>
      <div class="st-row"><span>列表项 02</span><small>Sticky 依附最近的滚动容器</small></div>
      <div class="st-row"><span>列表项 03</span><small>直到父容器底部才被推走</small></div>
      <div class="st-row"><span>列表项 04</span><small>常用于表格表头、筛选条</small></div>
      <div class="st-row"><span>列表项 05</span><small>无需 JavaScript 即可实现</small></div>
      <div class="st-row"><span>列表项 06</span><small>滚到底部验证被推走</small></div>
      <div class="st-row"><span>列表项 07</span><small>Sticky ≠ Fixed</small></div></div>`,
    v: ['容器内首行是带毛玻璃底的标题条，下方是普通列表行', '标题条与列表同处一个可滚容器'],
    m: ['滚动时标题条到达容器顶部即粘住，后续内容从它下方滑过', '滚到容器底部时被最后一行自然推走', '粘附与解除全程无跳变，纯 CSS sticky 实现']
  },
  {
    n: '滚动吸附', en: 'Scroll Snap', k: '松手归位 · 吸附对齐',
    d: '滚动松手后自动吸附到最近的对齐点，即 scroll-snap。',
    h: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:300px">
      <div class="snap-row">
        <div class="snap-card s1"><b>卡片 A</b><span>snap start</span></div>
        <div class="snap-card s2"><b>卡片 B</b><span>松手即归位</span></div>
        <div class="snap-card s3"><b>卡片 C</b><span>跨过一半才切换</span></div>
        <div class="snap-card s4"><b>卡片 D</b><span>scroll-snap</span></div></div>
      <div class="snap-ctrl">
        <button class="replay" data-snap-nav="-1">← 上一张</button>
        <span class="kbd-hint">横向拖动试试</span>
        <button class="replay" data-snap-nav="1">下一张 →</button></div></div>`,
    v: ['横向卡片轨道，每张卡是一个吸附对齐点，轨道两端渐隐收边', '下方提供方向按钮与提示'],
    m: ['拖动或滑动松手后，轨道平滑吸附到最近卡片的对齐位置', '未越过卡片中线则弹回原位，越过则吸附到下一张', '按钮点击等价于一次带平滑滚动的翻页']
  },
  {
    n: '横向滚动画廊', en: 'Horizontal Scroll', k: '横向轨道 · 中心聚焦',
    d: '横向拖动的滚动画廊，越靠近中心的格子越大越亮。',
    h: `<div class="hg" data-hgal>
      <div class="hg-track">
        <div class="hg-t h1">01</div><div class="hg-t h2">02</div><div class="hg-t h3">03</div>
        <div class="hg-t h4">04</div><div class="hg-t h5">05</div><div class="hg-t h6">06</div>
        <div class="hg-t h1">07</div><div class="hg-t h3">08</div></div></div>
      <span class="kbd-hint">按住横向拖动 · 滚动时中心聚焦</span>`,
    v: ['一条横向溢出的缩略图轨道，格子用主题渐变区分，两端有渐隐遮罩', '轨道默认停在起始端'],
    m: ['按住可直接拖动横向滚动，松手无额外吸附', '滚动时逐格计算与中心的距离：越近越大越清晰，越远越小越淡', '缩放与透明度连续跟随滚动位置，不依赖离散状态']
  },
  {
    n: '卡片堆叠', en: 'Stacked Cards', k: '粘性堆叠 · 依次盖压',
    d: '滚动时卡片依次粘住并层层堆叠，即 Sticky Card Stack。',
    h: `<div class="stk">
      <div class="stk-c k1"><b>第 1 层</b><span>最先滚到顶部并粘住</span></div>
      <div class="stk-c k2"><b>第 2 层</b><span>叠在第 1 层之上</span></div>
      <div class="stk-c k3"><b>第 3 层</b><span>每层留一条边缘可见</span></div>
      <div class="stk-c k4"><b>第 4 层</b><span>像一叠纸被逐张压上</span></div></div>`,
    v: ['四张等宽卡片纵向排布，各自 sticky 到递增的顶部偏移，形成可见的层叠边缘', '层与层用渐深的底色区分前后关系'],
    m: ['滚动时每张卡到达自己的吸顶位即停住，后一张压在前一张之上', '错开的顶部偏移让每层边缘始终可见', '滚动到容器底部，整叠被一起推走']
  },
  {
    n: '光标拖尾', en: 'Cursor Trail', k: '轨迹跟随 · 逐点消散',
    d: '指针移动时身后留下一串逐渐缩小消散的光点。',
    h: `<div class="trail" data-trail>
      <b>移动鼠标画出轨迹</b><span>Cursor Trail · 拖尾光点</span></div>`,
    v: ['低对比的活动面板，光点为主题色小圆', '静止时面板只有两行提示文案'],
    m: ['指针移动时沿轨迹按节流频率洒下光点，落点即为指针坐标', '每个光点自缩放并淡出，生命周期不到一秒', '轨迹因此呈现「头亮尾淡」的拖尾感']
  },
  {
    n: '流动渐变描边', en: 'Animated Gradient Border', k: '环绕流转 · 描边发光',
    d: '描边是一圈持续旋转流动的渐变光环。',
    h: `<div class="agb">
      <div class="agb-in"><b>Animated Border</b><span>渐变描边持续环绕流动</span></div></div>`,
    v: ['外层是一圈旋转的锥形渐变，内层是玻璃面板，两者叠合只露出一圈细环', '渐变取主题色系，首尾无缝衔接'],
    m: ['渐变层匀速自转，光环看起来沿边框持续流动', '整体悬浮时内层轻微上浮，光环投影同步加深', '循环无缝，任何角度都看不出接缝跳变']
  },
  {
    n: '模糊渐显', en: 'Blur Reveal', k: '去焦入场 · 模糊消散',
    d: '内容从失焦模糊逐渐聚焦清晰，常用于图片与大标题入场。',
    h: `<div class="blr-group">
      <div class="blr"><b>焦点之外</b><span>初始为失焦的模糊态</span></div>
      <div class="blr b2"><b>逐渐清晰</b><span>Blur → Sharp 的聚焦过程</span></div></div>
      <button class="replay" data-replay="blur">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 11.5A8.5 8.5 0 1 0 18 17"/><path d="M20 5v6h-6"/></svg>
        重播聚焦</button>`,
    v: ['两块并排的玻璃面板，初始带高斯模糊与轻微放大', '文案在模糊中隐约可见，不做额外遮罩'],
    m: ['进入视口时模糊半径衰减到零、透明度升起、缩放回落，三者同步', '两块面板错开延迟，形成依次对焦的层次', '可重播：先瞬时回到失焦态，再完整播放聚焦']
  },
  {
    n: '页面转场', en: 'Page Transition', k: '屏间切换 · 方向位移',
    d: '两个「页面」之间带方向感的淡入淡出切换。',
    h: `<div class="ptbox" data-pt>
      <div class="pt-scr on" data-pt-scr><b>第一步 · 基本信息</b><p>离场向左、入场自右，暗示前进方向。</p></div>
      <div class="pt-scr" data-pt-scr><b>第二步 · 确认提交</b><p>返回时方向反转，形成空间一致性。</p></div></div>
      <div class="pt-ctrl">
        <button class="replay" data-pt-nav="-1">← 上一步</button>
        <span class="kbd-hint" data-pt-idx>1 / 2</span>
        <button class="replay" data-pt-nav="1">下一步 →</button></div>`,
    v: ['两块全尺寸的屏幕面板叠放于同一容器，同一时刻只有一块可见', '下方是方向按钮与页码读数'],
    m: ['前进时当前屏向左淡出，新屏自右侧位移淡入', '返回时方向完全反转，位移与淡入淡出同步', '切换期间旧屏立即退出指针事件，避免误点']
  },
  {
    n: '漂浮呼吸', en: 'Idle Float', k: '静置漂浮 · 循环起伏',
    d: '静置状态下的轻微漂浮起伏，让画面保持活性。',
    h: `<div class="ifloat">
      <div class="if-main">◈</div>
      <span class="if-orbit"></span>
      <span class="if-orbit o2"></span></div>`,
    v: ['中央是一枚圆角渐变主图标，外围两条细轨道环', '轨道环上各缀一枚小光点'],
    m: ['主图标做低幅度的上下漂浮与微旋，周期舒缓', '光点沿各自轨道匀速环绕，两条轨道错速', '整体循环无接缝，作为常驻的环境活性层']
  }
);
DATA.find(c => c.id === 'anatomy').items.push({
  n: '组件解剖图', en: 'Component Anatomy', k: '零件命名 · 按钮与输入', wide: true,
  d: '把按钮与输入框拆到零件级：每个零件的中英文专业名称，点选标记即可查询。',
  h: `<div class="anat">
    <div class="anat-map anat2">
      <div class="a2-block">
        <div class="a2-label">按钮 Button</div>
        <div class="a2-line">
          <button class="a2-btn" data-anat-zone="b0">
            <span class="a2-ic" data-anat-zone="b2">✦</span>
            <span data-anat-zone="b1">立即开始</span>
            <span class="a2-chev" data-anat-zone="b3">›</span>
            <span class="a2-spin" data-anat-zone="b5"></span>
            <span class="a2-badge" data-anat-zone="b7">3</span>
          </button>
          <button class="a2-btn pressed" data-anat-zone="b4">按压态</button>
          <button class="a2-btn ghost" data-anat-zone="b6" disabled>禁用态</button>
        </div>
        <div class="a2-focus" data-anat-zone="b8"><span>焦点环 Focus Ring</span></div>
      </div>
      <div class="a2-block">
        <div class="a2-label">输入框 Input</div>
        <div class="a2-field" data-anat-zone="i1">
          <label data-anat-zone="i2">邮箱地址</label>
          <span class="a2-lead" data-anat-zone="i4">✉</span>
          <input value="you@example.com" data-anat-zone="i3" aria-label="解剖演示输入">
          <span class="a2-clear" data-anat-zone="i5">✕</span>
          <span class="a2-affix" data-anat-zone="i6">▾</span>
        </div>
        <div class="a2-help" data-anat-zone="i7">帮助文本 Helper Text · 说明格式或限制</div>
        <div class="a2-err" data-anat-zone="i8">错误信息 Error Message · 需要修正的提示</div>
      </div>
    </div>
    <div class="anat-terms">
      <div class="anat-detail" data-anat-detail></div>
      <div class="anat-rows">
        <button class="anat-row" data-anat-row="b0" data-cn="容器" data-en="Container" data-desc="控件的外轮廓本体，承载内边距、圆角、描边与背景材质，是零件的附着面。"><span class="ar-t"><b>25</b>容器</span><span class="ar-en">Container</span></button>
        <button class="anat-row" data-anat-row="b1" data-cn="主标签" data-en="Label" data-desc="按钮上承载动作名称的文字，动词优先，一行内说清「点下去会发生什么」。"><span class="ar-t"><b>26</b>主标签</span><span class="ar-en">Label</span></button>
        <button class="anat-row" data-anat-row="b2" data-cn="前导图标" data-en="Leading Icon" data-desc="位于标签左侧的辅助图形，强化语义或作为唯一标识；纯图标按钮需提供无障碍名称。"><span class="ar-t"><b>27</b>前导图标</span><span class="ar-en">Leading Icon</span></button>
        <button class="anat-row" data-anat-row="b3" data-cn="尾部图标" data-en="Trailing Icon" data-desc="标签右侧的附属图形，常见为展开箭头、计数或状态指示。"><span class="ar-t"><b>28</b>尾部图标</span><span class="ar-en">Trailing Icon</span></button>
        <button class="anat-row" data-anat-row="b4" data-cn="按压态" data-en="Pressed State" data-desc="按住瞬间的状态：轻微下沉与缩放，向用户确认「已接收按压」。"><span class="ar-t"><b>29</b>按压态</span><span class="ar-en">Pressed</span></button>
        <button class="anat-row" data-anat-row="b5" data-cn="加载指示" data-en="Loading Indicator" data-desc="请求进行中在原位替换内容的旋转指示，同时禁止重复提交。"><span class="ar-t"><b>30</b>加载指示</span><span class="ar-en">Loading</span></button>
        <button class="anat-row" data-anat-row="b6" data-cn="禁用态" data-en="Disabled State" data-desc="不可交互状态：降低透明度并屏蔽指针事件，仍保持布局占位。"><span class="ar-t"><b>31</b>禁用态</span><span class="ar-en">Disabled</span></button>
        <button class="anat-row" data-anat-row="b7" data-cn="角标" data-en="Badge" data-desc="钉在控件角落的计数或状态点，用于在不打扰主任务的前提下提示新信息。"><span class="ar-t"><b>32</b>角标</span><span class="ar-en">Badge</span></button>
        <button class="anat-row" data-anat-row="b8" data-cn="焦点环" data-en="Focus Ring" data-desc="键盘聚焦时出现的外圈指示，无障碍必需；与鼠标悬停态明确区分。"><span class="ar-t"><b>33</b>焦点环</span><span class="ar-en">Focus Ring</span></button>
        <button class="anat-row" data-anat-row="i1" data-cn="字段容器" data-en="Field Container" data-desc="输入控件的外框本体，决定内边距、圆角与聚焦时的描边/光晕表现。"><span class="ar-t"><b>34</b>字段容器</span><span class="ar-en">Field</span></button>
        <button class="anat-row" data-anat-row="i2" data-cn="浮动标签" data-en="Floating Label" data-desc="空值时居中作占位、聚焦或有值时缩小上浮到边框上的标签，避免用 placeholder 代替标签。"><span class="ar-t"><b>35</b>浮动标签</span><span class="ar-en">Floating Label</span></button>
        <button class="anat-row" data-anat-row="i3" data-cn="占位符" data-en="Placeholder" data-desc="空值时的示例文字，仅作格式示范；一旦输入即消失，不能承担标签职责。"><span class="ar-t"><b>36</b>占位符</span><span class="ar-en">Placeholder</span></button>
        <button class="anat-row" data-anat-row="i4" data-cn="前导图标" data-en="Leading Icon" data-desc="字段左侧的语义图标，提示输入内容的类型；与尾部修饰相对。"><span class="ar-t"><b>37</b>前导图标</span><span class="ar-en">Leading Icon</span></button>
        <button class="anat-row" data-anat-row="i5" data-cn="清除按钮" data-en="Clear Button" data-desc="一键清空当前输入的尾部小按钮，仅在有内容时出现。"><span class="ar-t"><b>38</b>清除按钮</span><span class="ar-en">Clear Button</span></button>
        <button class="anat-row" data-anat-row="i6" data-cn="尾部修饰" data-en="Trailing Affix" data-desc="输入框尾部的附加控件：展开箭头、单位后缀或密码显隐开关等。"><span class="ar-t"><b>39</b>尾部修饰</span><span class="ar-en">Trailing Affix</span></button>
        <button class="anat-row" data-anat-row="i7" data-cn="帮助文本" data-en="Helper Text" data-desc="字段下方的说明文字，解释格式要求与限制；与错误信息同位但语义不同。"><span class="ar-t"><b>40</b>帮助文本</span><span class="ar-en">Helper Text</span></button>
        <button class="anat-row" data-anat-row="i8" data-cn="错误信息" data-en="Error Message" data-desc="校验失败时的语义色提示，必须说明错在哪里、怎么改，不能只说「输入有误」。"><span class="ar-t"><b>41</b>错误信息</span><span class="ar-en">Error Message</span></button>
      </div>
    </div></div>`,
  v: ['上半是两个零件级解剖台：按钮（含按压/禁用变体与角标）与输入框（含帮助与错误两行）', '每个零件带可点的高亮标记，右侧术语表给中英文专业名与定义'],
  m: ['点选图中零件或右表行目，两侧同步高亮并更新详情', '加载指示保持自转，焦点环以描边高亮表达', '术语行悬停轻微上浮，详情区平滑换文']
});
/* ===== 补全批次三 ===== */
DATA.find(c => c.id === 'forms').items.push(
  {
    n: '验证码输入', en: 'OTP Input', k: '分格输入 · 自动跳格',
    d: '一次性密码的分格输入，输入后自动跳到下一格。',
    h: `<div class="otp" data-otp>
      <input maxlength="1" inputmode="numeric" aria-label="第1位"><input maxlength="1" inputmode="numeric" aria-label="第2位">
      <input maxlength="1" inputmode="numeric" aria-label="第3位"><input maxlength="1" inputmode="numeric" aria-label="第4位">
      <input maxlength="1" inputmode="numeric" aria-label="第5位"><input maxlength="1" inputmode="numeric" aria-label="第6位"></div>`,
    v: ['六枚等宽分格，等宽字体居中显示数字', '有值的格子边框点亮为强调色'],
    m: ['输入一位后焦点自动跳到下一格', '退格时焦点回退到上一格', '聚焦格轻微上浮并出现外圈柔光']
  },
  {
    n: '密码强度', en: 'Password Strength', k: '实时评估 · 色阶反馈',
    d: '随输入实时评估密码强度，用色阶条给出反馈。',
    h: `<div class="pwr">
      <div class="fld" style="width:100%"><input type="password" placeholder=" " data-pwr-input><label>设置密码</label></div>
      <div class="pwr-bar"><div class="pwr-fill" data-pwr-fill></div></div>
      <div class="pwr-lab"><span>强度：太弱 → 很强</span><b data-pwr-lab>—</b></div></div>`,
    v: ['输入框下方一条强度轨道与一行文字评级', '强度条按等级从危险色渐变到成功色'],
    m: ['每次按键重新计算：长度、大小写、数字、符号加权', '强度条宽度与颜色平滑过渡', '评级文字同步切换（太弱/一般/较强/很强）']
  },
  {
    n: '双头滑块', en: 'Range Slider', k: '双端取值 · 区间夹取',
    d: '两个滑块头夹出一个数值区间。',
    h: `<div class="drng" data-drng>
      <div class="dr-lab"><span>¥ 200</span><span>¥ 800</span></div>
      <div class="dr-track"></div><div class="dr-fill" data-dr-fill></div>
      <input type="range" min="0" max="1000" value="200" data-dr-a aria-label="最低价">
      <input type="range" min="0" max="1000" value="800" data-dr-b aria-label="最高价"></div>`,
    v: ['轨道中央是强调色的已选区间，两端各一枚白色拇指', '上方实时显示两端数值'],
    m: ['拖动任一端时区间实时更新，两端互不越过（夹取）', '填充条跟随较近的一端平滑伸缩', '按住拇指时放大']
  },
  {
    n: '自动补全', en: 'Combobox', k: '输入过滤 · 建议列表',
    d: '边输入边过滤候选，点选回填。',
    h: `<div class="cmb">
      <input class="ginput" style="width:100%" data-cmb-input placeholder="输入城市名过滤…" aria-label="自动补全">
      <div class="cmb-list" data-cmb-list>
        <button data-cmb-i>北京</button><button data-cmb-i>上海</button><button data-cmb-i>广州</button>
        <button data-cmb-i>深圳</button><button data-cmb-i>杭州</button><button data-cmb-i>成都</button></div></div>`,
    v: ['输入框下方是可滚动的建议列表，每项一行', '无匹配时显示空态提示'],
    m: ['输入即时过滤候选项，匹配项保持原序', '悬停高亮，点击选中回填', '空匹配给出「无匹配结果」的行内反馈']
  },
  {
    n: '组合输入', en: 'Input Group', k: '前后缀 · 一体外框',
    d: '前后缀与输入融为一个外框。',
    h: `<div class="igroup">
      <span class="ig-pre">https://</span>
      <input value="liquid-glass.ui" aria-label="网址">
      <span class="ig-suf">.com</span></div>`,
    v: ['单个外框内分三段：前缀、输入、后缀，段间以细线分隔', '前后缀用弱字色，不与输入内容争夺注意力'],
    m: ['聚焦时整个组合体点亮边框与柔光，而非只亮输入段', '前后缀背景比输入段略深，形成「夹住」的层次']
  },
  {
    n: '计数文本域', en: 'Textarea Counter', k: '字数预警 · 阈值变色',
    d: '带字数统计的文本域，接近上限时预警。',
    h: `<div class="tac">
      <textarea class="ta" maxlength="80" data-counter placeholder="最多 80 字…" aria-label="计数文本域"></textarea>
      <div class="tac-top" data-counter-out>0 / 80</div></div>`,
    v: ['文本域右下角是等宽字体的字数读数', '读数平时弱字色，接近上限换警告色'],
    m: ['输入时读数实时更新', '超过 80% 阈值时读数变为警告色，提示余量不多']
  }
);

DATA.find(c => c.id === 'buttons').items.push(
  {
    n: '分裂按钮', en: 'Split Button', k: '主次合一 · 就地菜单',
    d: '左侧执行默认动作，右侧箭头展开更多动作。',
    h: `<div class="split-wrap">
      <div class="split">
        <button class="sp-main" data-toast data-msg="已执行默认动作：发布">发布</button>
        <button class="sp-more" data-split-t aria-label="更多动作">▾</button></div>
      <div class="split-menu" data-split-m>
        <button data-toast data-msg="已发布为草稿">发布为草稿</button>
        <button data-toast data-msg="已加入发布计划">定时发布</button>
        <button data-toast data-msg="已复制发布链接">复制链接</button></div></div>`,
    v: ['一个整体被竖线分成两段：宽的主操作 + 窄的箭头段', '两段共用同一渐变，箭头段略深'],
    m: ['点击主段直接执行默认动作', '点击箭头段在下方就地展开菜单，带缩放浮现', '点外部或再次点击收起']
  },
  {
    n: '工具条', en: 'Toolbar', k: '并排操作 · 悬停抬起',
    d: '一组同级轻量操作聚合成的浮动工具条。',
    h: `<div class="toolbar">
      <button data-toast data-msg="已加粗">B</button>
      <button data-toast data-msg="已倾斜">I</button>
      <button data-toast data-msg="已添加链接">🔗</button>
      <span class="tb-div"></span>
      <button data-toast data-msg="已插入图片">图</button>
      <button data-toast data-msg="已清除格式">⌫</button></div>`,
    v: ['低矮的玻璃长条，内部图标按钮等距排列，以细分隔线分组', '无边框按钮，靠悬停浅底表达可点'],
    m: ['悬停单项时该键上浮并点亮', '分隔线把相关操作聚成逻辑组']
  },
  {
    n: '复制按钮', en: 'Copy Button', k: '一键复制 · 成功定格',
    d: '点击把内容写入剪贴板并短暂定格成功态。',
    h: `<button class="copybtn" data-copytext="npm create liquid-glass@latest">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="9" y="9" width="12" height="12" rx="2.5"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      <span data-cb-label>npm create liquid-glass@latest</span></button>`,
    v: ['等宽字体展示可复制的命令，左侧一枚复制图标', '成功态整体换成成功色描边与文案'],
    m: ['点击写入剪贴板，按钮短暂变为「已复制」', '约两秒后恢复原文案，可反复点击']
  }
);

DATA.find(c => c.id === 'nav').items.push(
  {
    n: '次级标签页', en: 'Secondary Tabs', k: '下划线指示 · 线性样式',
    d: '线性下划线样式的标签页，用于次级内容切换。',
    h: `<div class="tabs line" data-tabs><span class="tab-ink"></span>
      <button class="tab active" data-tab>详情</button>
      <button class="tab" data-tab>参数</button>
      <button class="tab" data-tab>评论</button></div>`,
    v: ['没有胶囊底槽，仅在底部保留一条通栏细线', '指示器是一小段加粗的下划线'],
    m: ['切换时下划线滑动到新标签并同步变宽', '选中文字加重，未选保持次级字色', '与胶囊式 Tabs 形成主次层级的区分']
  },
  {
    n: '锚点导航', en: 'Anchor Nav', k: '滚动监听 · 侧杆指示',
    d: '跟随滚动高亮当前小节的纵向锚点导航。',
    h: `<div class="anch-row">
      <div class="anch" data-anchor>
        <button class="on" data-anchor-to="0"><i></i>概览</button>
        <button data-anchor-to="1"><i></i>安装</button>
        <button data-anchor-to="2"><i></i>使用示例</button>
        <button data-anchor-to="3"><i></i>常见问题</button></div>
      <div class="anch-body" data-anchor-body>
        <div class="anch-sec"><b>概览</b><p>锚点导航用于长页面内的小节定位，当前所在小节会自动高亮。</p></div>
        <div class="anch-sec"><b>安装</b><p>把标记放进可滚动容器旁，监听容器的滚动位置即可实现。</p></div>
        <div class="anch-sec"><b>使用示例</b><p>文档侧栏、文章目录、表单分节都是它的典型场景。</p></div>
        <div class="anch-sec"><b>常见问题</b><p>注意与吸顶标题配合时的滚动偏移补偿。</p></div></div></div>`,
    v: ['竖排链接列表，每项左侧一根短侧杆作为指示器', '当前项点亮侧杆与文字并带浅底'],
    m: ['随所在容器的滚动位置自动高亮对应项（Scrollspy）', '点击某项平滑滚动到对应段落', '侧杆的出现带轻微的伸展过渡']
  }
);
DATA.find(c => c.id === 'data').items.push(
  {
    n: '环形图', en: 'Donut Chart', k: '扇段拼合 · 描边绘入',
    d: '用一段段圆弧拼出的占比环图。',
    h: `<div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap;justify-content:center">
      <div class="donut">
        <svg viewBox="0 0 120 120">
          <defs>
            <linearGradient id="dnG1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d7dff"/><stop offset="1" stop-color="#8a7bff"/></linearGradient>
          </defs>
          <circle class="dn-bg" cx="60" cy="60" r="50"/>
          <circle class="dn-s1" cx="60" cy="60" r="50" stroke="url(#dnG1)" stroke-dasharray="314"/>
          <circle class="dn-s2" cx="60" cy="60" r="50" stroke="#c44dff" stroke-dasharray="314" style="transform:rotate(180deg);transform-origin:60px 60px"/>
          <circle class="dn-s3" cx="60" cy="60" r="50" stroke="#28c8e0" stroke-dasharray="314" style="transform:rotate(270deg);transform-origin:60px 60px"/>
        </svg></div>
      <div class="donut-legend">
        <span><i style="background:#6d7dff"></i>直接访问 50%</span>
        <span><i style="background:#c44dff"></i>搜索引擎 25%</span>
        <span><i style="background:#28c8e0"></i>外链引荐 12.5%</span></div></div>`,
    v: ['粗环形底槽上叠三段不同颜色的扇段，右侧图例对色', '段与段之间留有细缝，避免粘连'],
    m: ['进入视口时各段以描边偏移依次绘入', '段与段错开延迟，像时钟依次点亮', '绘入完成后静止，不循环']
  },
  {
    n: '热力图', en: 'Heatmap', k: '密度着色 · 悬停读值',
    d: '用色块深浅表达密度的贡献热力图。',
    h: `<div>
      <div class="heat">
        <i class="lv2"></i><i class="lv0"></i><i class="lv3"></i><i class="lv1"></i><i class="lv4"></i><i class="lv2"></i><i class="lv0"></i>
        <i class="lv1"></i><i class="lv3"></i><i class="lv2"></i><i class="lv4"></i><i class="lv1"></i><i class="lv0"></i><i class="lv2"></i>
        <i class="lv3"></i><i class="lv4"></i><i class="lv2"></i><i class="lv1"></i><i class="lv0"></i><i class="lv3"></i><i class="lv2"></i>
        <i class="lv0"></i><i class="lv1"></i><i class="lv4"></i><i class="lv3"></i><i class="lv2"></i><i class="lv1"></i><i class="lv0"></i></div>
      <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--ink-3);margin-top:9px;font-family:var(--mono)"><span>4 周前</span><span>今天</span></div></div>`,
    v: ['11×4 的圆角方格阵列，颜色从底色到强调色分四档', '底部标注时间跨度'],
    m: ['悬停单格放大并点亮描边，可读出该点密度', '整体入场时按列依次淡入，像数据落盘']
  },
  {
    n: '仪表盘', en: 'Gauge', k: '半环进度 · 指标读数',
    d: '半圆形的指标仪表，常用于完成率与健康度。',
    h: `<div class="gauge" data-pct="60">
      <svg viewBox="0 0 150 150">
        <defs><linearGradient id="ggGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#28c8e0"/><stop offset="1" stop-color="#6d7dff"/></linearGradient></defs>
        <path class="gg-bg" d="M15 75 A60 60 0 0 1 135 75"/>
        <path class="gg-fg" d="M15 75 A60 60 0 0 1 135 75"/>
      </svg><b>60<span>%</span></b></div>`,
    v: ['半圆轨道，渐变进度弧从左扫到右，中心下方大号读数', '轨道与进度同宽同圆头'],
    m: ['进入视口时进度弧从零扫到目标角度', '读数与弧同步递增到目标值', '扫入完成后静止']
  },
  {
    n: '排行榜', en: 'Leaderboard', k: '名次徽章 · 首名高亮',
    d: '带名次徽章的得分排行列表。',
    h: `<div class="lb">
      <div class="lb-row top"><span class="lb-no">1</span><span class="lb-nm">林晓岸</span><span class="lb-vl">9,820</span></div>
      <div class="lb-row"><span class="lb-no">2</span><span class="lb-nm">周叙</span><span class="lb-vl">8,640</span></div>
      <div class="lb-row"><span class="lb-no">3</span><span class="lb-nm">陈可</span><span class="lb-vl">7,915</span></div>
      <div class="lb-row"><span class="lb-no">4</span><span class="lb-nm">李小明</span><span class="lb-vl">6,480</span></div></div>`,
    v: ['每行三段：名次徽章、名称、右侧等宽得分', '首名行用强调渐变底并高亮徽章'],
    m: ['悬停行向右平移并点亮描边', '首名徽章带轻微的脉冲光晕']
  },
  {
    n: '骨架表格', en: 'Skeleton Table', k: '表头占位 · 流光扫过',
    d: '表格加载时的骨架占位形态。',
    h: `<div class="skt">
      <div class="skt-row"><span class="sk-b sk-h" style="flex:2"></span><span class="sk-b sk-h" style="flex:1"></span><span class="sk-b sk-h" style="flex:1"></span></div>
      <div class="skt-row"><span class="sk-b" style="flex:2"></span><span class="sk-b" style="flex:1"></span><span class="sk-b" style="flex:1"></span></div>
      <div class="skt-row"><span class="sk-b" style="flex:2"></span><span class="sk-b" style="flex:1"></span><span class="sk-b" style="flex:1"></span></div>
      <div class="skt-row"><span class="sk-b" style="flex:2"></span><span class="sk-b" style="flex:1"></span><span class="sk-b" style="flex:1"></span></div></div>`,
    v: ['与真实表格同构：一行表头块 + 若干数据行块，列宽比例一致', '占位块为浅玻璃材质'],
    m: ['高光带循环扫过全部占位块', '加载完成后可整体交叉淡出换成真实表格，无布局跳动']
  },
  {
    n: '均分评分', en: 'Average Rating', k: '大号均分 · 星级并列',
    d: '汇总后的均分展示：大数字 + 星级 + 评价数。',
    h: `<div class="avg">
      <div><div class="avg-n">4.8</div><div class="avg-c">2,431 条评价</div></div>
      <div><div class="avg-s">★★★★★</div><div class="avg-c">96% 推荐</div></div></div>`,
    v: ['左侧超大均分数值，右侧实心星级与辅助统计', '数字用等宽与紧字距，星级保持暖色'],
    m: ['入场时星级自左向右依次点亮', '均分数值可与数字滚动组件配合从零递增']
  }
);

DATA.find(c => c.id === 'feedback').items.push(
  {
    n: '全屏加载', en: 'Fullscreen Loading', k: '全局遮罩 · 匀速环',
    d: '阻断交互的全局加载态，常用于页面切换与首屏。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
      <button class="gbtn primary" data-loc="fsl" data-fsl-auto="1500">触发全屏加载</button>
      <span class="kbd-hint">1.5 秒后自动结束</span></div>
      <div class="loc-fsl" data-fsl><span class="fsl-ring"></span><span>正在加载…</span></div>`,
    v: ['半透明深色遮罩 + 背景模糊，中央一枚匀速旋转环与一行状态文案', '遮罩覆盖整个演示区并拦截点击'],
    m: ['打开时遮罩淡入，旋转环持续匀速转动', '超时或完成后遮罩淡出交还控制权', '期间禁止重复触发']
  },
  {
    n: '加载更多', en: 'Loading More', k: '列表续载 · 骨架过渡',
    d: '列表底部的「加载更多」，先骨架后落座。',
    h: `<div class="lmore" data-lmore>
      <div class="lm-row"><i>◈</i>既有条目 · 第 1 条</div>
      <div class="lm-row"><i>◈</i>既有条目 · 第 2 条</div>
      <button class="replay" data-lmore-btn>加载更多 ↓</button></div>`,
    v: ['竖排列表，底部是居中的加载入口', '加载时入口换成两行骨架行'],
    m: ['点击后按钮变为加载态并插入骨架行', '数据就绪后骨架交叉淡出为真实条目，带级联入场', '可反复点击继续追加']
  },
  {
    n: 'HUD 音量', en: 'Volume HUD', k: '点按调节 · 竖向液柱',
    d: 'iOS 风格的音量抬头显示，点按即可调节。',
    h: `<div class="hud" data-hud>
      <span class="hud-ic">🔊</span>
      <div class="hud-track"><div class="hud-fill" data-hud-fill></div></div>
      <span class="hud-val" data-hud-val>60</span></div>`,
    v: ['圆角矩形玻璃块，内含图标、竖向液柱与数值', '液柱从底部上涨，顶部圆头'],
    m: ['点击块体循环切换预设音量档位', '液柱高度以弹簧曲线过渡', '数值与液柱同步更新']
  }
);

DATA.find(c => c.id === 'overlays').items.push(
  {
    n: '悬浮预览卡', en: 'Hover Card', k: '悬停浮现 · 资料速览',
    d: '悬停在触发物上时浮现的迷你资料卡。',
    h: `<div class="hovc">
      <button class="gbtn soft sm">@林晓岸 悬停查看</button>
      <div class="hovc-card">
        <div class="hc-av">林</div>
        <b>林晓岸</b><span>产品设计师 · Lumen</span>
        <p>负责设计系统与组件库，正在把提示词工程引入日常工作流。</p></div></div>`,
    v: ['迷你玻璃卡：居中头像、姓名、身份与一行简介', '锚定在触发器上方，带指向关系'],
    m: ['悬停触发器时卡片自下方上浮淡入', '移出后快速淡出，不残留', '适合 @提及、链接预览、成员速览']
  },
  {
    n: '选择工具条', en: 'Selection Toolbar', k: '选区浮现 · 就地操作',
    d: '选中文字后在选区上方浮现的格式工具条。',
    h: `<div class="seltool-wrap" data-seltool>
      <span class="sel-bar" data-sel-bar>
        <button data-toast data-msg="已复制所选文本">复制</button>
        <button data-toast data-msg="已搜索所选文本">搜索</button>
        <button data-toast data-msg="已翻译（演示）">翻译</button>
        <button data-toast data-msg="已加书签">书签</button></span>
      在下方这段文字里按住拖动选中任意几个字，工具条会在选区上方浮现——这是编辑器与阅读类产品的标准交互，专业名叫 Selection Toolbar。</div>`,
    v: ['一段可选中的示例文本，工具条为深色胶囊悬浮层', '工具条内是等距的文本操作按钮'],
    m: ['选区非空时工具条在选区上方居中浮现', '点击外部或取消选区后立即隐藏', '操作项点击后给出轻提示']
  }
);
DATA.find(c => c.id === 'animation').items.push(
  {
    n: '频谱声波', en: 'Audio Bars', k: '错相起伏 · 循环跳动',
    d: '随音频节奏起伏的频谱柱，常用作播放状态的视觉表达。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <div class="abars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <span class="kbd-hint">正在播放 · Audio Visualizer</span></div>`,
    v: ['一排等宽圆头竖条，渐变从主题色过渡到品红', '高度错落，中间高两端低的默认形态'],
    m: ['每根柱子以各自的延迟做上下起伏，循环往复', '错相节奏让整排看起来像在响应音频', '可与音乐播放器的播放状态联动启停']
  },
  {
    n: '数字时钟', en: 'Live Clock', k: '秒级走字 · 等宽跳动',
    d: '每秒走字的实时时钟，分隔符闪烁。',
    h: `<div class="clock">
      <div class="clk-t" data-clock>--<i>:</i>--<i>:</i>--</div>
      <div class="clk-d" data-clock-date>—</div></div>`,
    v: ['大号等宽时间显示，冒号分隔符单独着色', '下方一行日期与星期'],
    m: ['每秒更新时分秒，数字用等宽避免抖动', '冒号以两段式闪烁，呼应终端风格', '页面隐藏时暂停节流，回来即校准']
  }
);

DATA.find(c => c.id === 'scenes').items.push(
  {
    n: '任务清单', en: 'Task List', k: '勾选划线 · 进度联动',
    d: '可勾选的任务列表，完成度实时联动进度条。',
    h: `<div class="task" data-task>
      <div class="task-top"><b>今日任务</b><span data-task-count>1 / 4</span></div>
      <div class="task-prg"><i data-task-prg style="width:25%"></i></div>
      <label class="task-i"><input type="checkbox" checked><span>整理组件分类</span></label>
      <label class="task-i"><input type="checkbox"><span>补齐滚动动效</span></label>
      <label class="task-i"><input type="checkbox"><span>校对术语表</span></label>
      <label class="task-i"><input type="checkbox"><span>导出提示词包</span></label></div>`,
    v: ['卡片内：标题行、完成度读数、细进度条、四条任务行', '复选框勾选后任务文字划线弱化'],
    m: ['勾选瞬间复选框带回弹缩放，文字同步划线', '顶部进度条与计数实时联动更新', '整条任务行悬停轻微点亮']
  },
  {
    n: '资料头', en: 'Profile Header', k: '封面叠像 · 悬浮抬升',
    d: '封面图 + 头像压边的个人资料头卡。',
    h: `<div class="ph">
      <div class="ph-cover"></div>
      <div class="ph-body">
        <div class="ph-av">许</div>
        <b>许知微</b><span>产品经理 · Lumen</span>
        <div class="ph-tags">
          <span class="tg" style="padding:3px 9px;font-size:11px">B2B</span>
          <span class="tg" style="padding:3px 9px;font-size:11px">设计系统</span>
          <span class="tg" style="padding:3px 9px;font-size:11px">北京</span></div></div></div>`,
    v: ['上半是渐变封面，头像圆章压在封面与信息区的交界上', '信息区：姓名、身份、标签行'],
    m: ['悬停整卡上浮、投影加深', '封面渐变可带缓慢的色相流动', '头像上浮时轻微放大']
  },
  {
    n: '通知中心', en: 'Notification Center', k: '分组列表 · 一键清空',
    d: '集中管理通知的面板，可一键清空。',
    h: `<div class="nc" data-nc>
      <div class="nc-top"><span>通知中心</span><button data-nc-clear>全部清除</button></div>
      <div class="nc-list" data-nc-list>
        <div class="nc-i"><i></i><div><b>新版本 v2.5 可用</b><span>2 分钟前</span></div></div>
        <div class="nc-i"><i></i><div><b>@周叙 评论了你的 PR</b><span>15 分钟前</span></div></div>
        <div class="nc-i"><i class="read"></i><div><b>部署成功（生产）</b><span>1 小时前</span></div></div>
        <div class="nc-i"><i class="read"></i><div><b>周报已生成</b><span>昨天</span></div></div></div>
      <div class="nc-empty nc-hide" data-nc-empty>没有新通知<br><button class="replay" data-nc-reset style="margin-top:10px">恢复演示</button></div></div>`,
    v: ['顶部标题 + 清除入口，下方可滚动的通知列表', '未读行左侧强调色圆点，已读为弱灰点'],
    m: ['悬停行点亮描边', '全部清除时列表淡出、空态浮现', '可一键恢复演示数据']
  },
  {
    n: '天气卡片', en: 'Weather Card', k: '渐变氛围 · 小时预报',
    d: '当前天气 + 逐时预报的氛围卡片。',
    h: `<div class="wx">
      <div class="wx-top">
        <span class="wx-ic">⛅</span>
        <div><div class="wx-t">26<span>°C</span></div><div class="wx-m">多云转晴 · 北京 · 空气优</div></div></div>
      <div class="wx-hours">
        <div class="wx-h">现在☀<b>26°</b></div>
        <div class="wx-h">15时⛅<b>27°</b></div>
        <div class="wx-h">16时⛅<b>25°</b></div>
        <div class="wx-h">17时☁<b>23°</b></div>
        <div class="wx-h">18时🌙<b>21°</b></div></div></div>`,
    v: ['天空色渐变铺底，左侧大天气图标，右侧温度与城市', '底部一排逐时预报小单元'],
    m: ['天气图标带缓慢的漂浮起伏', '悬停整卡上浮并加深投影', '可随真实数据替换图标与温度']
  }
);

DATA.find(c => c.id === 'layout').items.push(
  {
    n: '页脚', en: 'Site Footer', k: '多列链接 · 收尾信息',
    d: '官网底部的多列链接与版权区。',
    h: `<div class="sfoot">
      <div class="sfoot-top">
        <div class="sfoot-col"><b>产品</b><a href="#">组件库</a><a href="#">动效包</a><a href="#">提示词集</a></div>
        <div class="sfoot-col"><b>资源</b><a href="#">文档</a><a href="#">更新日志</a><a href="#">状态页</a></div>
        <div class="sfoot-col"><b>关于</b><a href="#">团队</a><a href="#">联系</a><a href="#">条款</a></div></div>
      <div class="sfoot-base"><span>© 2026 Liquid Glass</span><span>Made locally · 不上传任何数据</span></div></div>`,
    v: ['上部三列链接组，下部一条版权与备注的基线行', '列标题加重，链接为弱字色'],
    m: ['悬停链接向右轻移并点亮', '进入视口时三列以级联延迟淡入']
  },
  {
    n: '对比表', en: 'Comparison Table', k: '能力矩阵 · 优列高亮',
    d: '套餐/方案的能力对比矩阵。',
    h: `<table class="cmpt">
      <thead><tr><th>能力</th><th>基础版</th><th class="hot">专业版</th><th>旗舰版</th></tr></thead>
      <tbody>
        <tr><td>组件数量</td><td>60+</td><td class="hot">120+</td><td>全部</td></tr>
        <tr><td>提示词导出</td><td class="yes">✓</td><td class="yes">✓</td><td class="yes">✓</td></tr>
        <tr><td>动效源码</td><td class="no">—</td><td class="yes">✓</td><td class="yes">✓</td></tr>
        <tr><td>团队协作</td><td class="no">—</td><td class="no">—</td><td class="yes">✓</td></tr>
        <tr><td>优先支持</td><td class="no">—</td><td class="no">—</td><td class="yes">✓</td></tr>
      </tbody></table>`,
    v: ['四列矩阵：能力名左对齐，三档方案列居中', '推荐列（专业版）表头与数值用强调色', '支持项用成功色勾，不支持用弱灰破折号'],
    m: ['行悬停整行点亮', '推荐列可加一道纵向的淡强调底色', '入场时按行级联淡入']
  }
);
DATA.find(c => c.id === 'anatomy').items.push({
  n: '导航部位图', en: 'Nav Anatomy', k: '导航零件 · 三件套', wide: true,
  d: '顶部导航栏、底部标签栏、标签页——每个零件的中英文专业名称，点选即红色高亮。',
  h: `<div class="anat">
    <div class="anat-map anat-nav">
      <div class="an-block">
        <div class="a2-label">顶部导航栏 App Bar</div>
        <div class="an-nav" data-anat-zone="n0">
          <button class="an-back" data-anat-zone="n1" aria-label="返回">←</button>
          <b data-anat-zone="n2">页面标题</b>
          <span class="an-acts" data-anat-zone="n3"><i data-anat-zone="n4">☆</i><i>⋮</i></span>
        </div>
      </div>
      <div class="an-block">
        <div class="a2-label">底部标签栏 Tab Bar</div>
        <div class="an-tabbar" data-anat-zone="t0">
          <div class="an-tb on" data-anat-zone="t2"><span data-anat-zone="t4">⌂</span><em data-anat-zone="t5">首页</em></div>
          <div class="an-tb" data-anat-zone="t1"><span>⌕</span><em>发现</em><i class="an-badge" data-anat-zone="t3">3</i></div>
          <div class="an-tb"><span>☰</span><em>列表</em></div>
        </div>
      </div>
      <div class="an-block">
        <div class="a2-label">标签页 Tabs</div>
        <div class="an-tabs" data-anat-zone="p0">
          <span class="an-tind" data-anat-zone="p3"></span>
          <b class="on" data-anat-zone="p2">全部</b><b data-anat-zone="p2">进行中</b><b>已完成</b>
        </div>
      </div>
    </div>
    <div class="anat-terms">
      <div class="anat-detail" data-anat-detail></div>
      <div class="anat-rows">
        <button class="anat-row" data-anat-row="n1" data-cn="返回按钮" data-en="Back Button" data-desc="导航栏左侧返回上一级的控件，行业标准是向左的箭头（chevron-left），移动端常配合边缘右滑手势。"><span class="ar-t"><b>42</b>返回按钮</span><span class="ar-en">Back Button</span></button>
        <button class="anat-row" data-anat-row="n2" data-cn="页面标题" data-en="Page Title" data-desc="导航栏中央的当前页面名称，字重加重；滚动后可缩小或换成更短的标题。"><span class="ar-t"><b>43</b>页面标题</span><span class="ar-en">Page Title</span></button>
        <button class="anat-row" data-anat-row="n3" data-cn="右侧操作区" data-en="Trailing Actions" data-desc="导航栏右侧的行动集合（更多、分享、编辑等），专业称 Trailing / Leading-Cavigation Actions。"><span class="ar-t"><b>44</b>右侧操作区</span><span class="ar-en">Trailing Actions</span></button>
        <button class="anat-row" data-anat-row="n4" data-cn="导航分割线" data-en="Divider" data-desc="导航栏与内容区之间的发丝级分隔线，毛玻璃导航上常省略，滚动后再显现。"><span class="ar-t"><b>45</b>导航分割线</span><span class="ar-en">Divider</span></button>
        <button class="anat-row" data-anat-row="t1" data-cn="标签项" data-en="Tab Item" data-desc="底部标签栏中的单个入口，图标 + 短文字竖排，点击切换一级页面。"><span class="ar-t"><b>46</b>标签项</span><span class="ar-en">Tab Item</span></button>
        <button class="anat-row" data-anat-row="t2" data-cn="选中态" data-en="Active Tab" data-desc="当前所在标签的状态：图标上浮放大、文字加重并染强调色，常配浅底或胶囊。"><span class="ar-t"><b>47</b>选中态</span><span class="ar-en">Active Tab</span></button>
        <button class="anat-row" data-anat-row="t3" data-cn="角标" data-en="Badge" data-desc="钉在标签项右上角的计数红点，提示该入口有未读内容。"><span class="ar-t"><b>48</b>角标</span><span class="ar-en">Badge</span></button>
        <button class="anat-row" data-anat-row="t4" data-cn="标签图标" data-en="Tab Icon" data-desc="标签项上半部的线性或面性图标，选中与未选中通常切换填充形态。"><span class="ar-t"><b>49</b>标签图标</span><span class="ar-en">Tab Icon</span></button>
        <button class="anat-row" data-anat-row="t5" data-cn="文字标签" data-en="Tab Label" data-desc="图标下方的小号文字，说明该入口的含义；移动端控制在 2–4 字。"><span class="ar-t"><b>50</b>文字标签</span><span class="ar-en">Tab Label</span></button>
        <button class="anat-row" data-anat-row="p0" data-cn="底槽" data-en="Tabs Track" data-desc="标签页的外层容器底槽，内含可滑动的指示器，也叫 Tab Bar Container。"><span class="ar-t"><b>51</b>底槽</span><span class="ar-en">Track</span></button>
        <button class="anat-row" data-anat-row="p2" data-cn="标签" data-en="Tab" data-desc="标签页中的单个可切换项，与底部标签栏的 Tab Item 同源不同场景：此处用于内容分栏。"><span class="ar-t"><b>52</b>标签</span><span class="ar-en">Tab</span></button>
        <button class="anat-row" data-anat-row="p3" data-cn="指示器" data-en="Tab Indicator" data-desc="跟随选中标签移动的高亮块或下划线，专业名 Indicator，是 Tabs 的动效核心。"><span class="ar-t"><b>53</b>指示器</span><span class="ar-en">Indicator</span></button>
      </div>
    </div></div>`,
  v: ['三块解剖台：带返回与操作区的顶部栏、含角标的底部标签栏、带滑动指示器的标签页', '点选任何零件即以红色高亮，右表同步'],
  m: ['点选零件或术语行，两侧联动；红色脉冲一次后保持醒目描边', '选中行同步更新中英文名与定义']
  , s: ['覆盖 默认 / 选中 / 未选中 / 角标四种导航状态']
});
DATA.find(c => c.id === 'anatomy').items.push({
  n: '容器与数据部位图', en: 'Container Anatomy', k: '容器零件 · 五件套', wide: true,
  d: '卡片、表格、弹窗、进度条、开关——容器与数据类控件的零件级命名。',
  h: `<div class="anat">
    <div class="anat-map anat-nav">
      <div class="an-block">
        <div class="a2-label">卡片 Card</div>
        <div class="an-card" data-anat-zone="c0">
          <div class="an-cmedia" data-anat-zone="c1"><em data-anat-zone="c6">标签</em></div>
          <div class="an-cbody">
            <b data-anat-zone="c2">卡片标题</b>
            <p data-anat-zone="c3">正文说明文字，两行以内为宜。</p>
            <div class="an-cmeta" data-anat-zone="c4"><i></i><span>元信息 · 2 分钟前</span></div>
            <div class="an-cacts" data-anat-zone="c5"><button>操作一</button><button>操作二</button></div>
          </div>
        </div>
      </div>
      <div class="an-block">
        <div class="a2-label">表格 Table</div>
        <table class="an-tbl" data-anat-zone="tb0">
          <thead><tr data-anat-zone="tb1"><th>名称 <em data-anat-zone="tb4">⇅</em></th><th>状态</th></tr></thead>
          <tbody>
            <tr data-anat-zone="tb2"><td data-anat-zone="tb3">订单 A1</td><td>完成</td></tr>
            <tr><td>订单 A2</td><td>进行中</td></tr>
          </tbody>
        </table>
      </div>
      <div class="an-block">
        <div class="a2-label">弹窗 Modal</div>
        <div class="an-modalwrap" data-anat-zone="md0">
          <div class="an-modal">
            <button class="an-mx" data-anat-zone="md5">✕</button>
            <b data-anat-zone="md2">弹窗标题</b>
            <p data-anat-zone="md3">正文说明，讲清后果与可逆性。</p>
            <div class="an-macts" data-anat-zone="md4"><button>取消</button><button class="p">确认</button></div>
          </div>
        </div>
      </div>
      <div class="an-block">
        <div class="a2-label">进度条 / 开关</div>
        <div class="an-prg" data-anat-zone="pg0"><em data-anat-zone="pg3">62%</em>
          <div class="an-ptrack" data-anat-zone="pg1"><div class="an-pfill" data-anat-zone="pg2"></div></div></div>
        <div class="an-swrow" data-anat-zone="sw0"><span>通知提醒</span>
          <div class="an-sw" data-anat-zone="sw1"><i data-anat-zone="sw2"></i></div></div>
      </div>
    </div>
    <div class="anat-terms">
      <div class="anat-detail" data-anat-detail></div>
      <div class="anat-rows">
        <button class="anat-row" data-anat-row="c1" data-cn="媒体区" data-en="Media Area" data-desc="卡片顶部的图片/封面区，承载视觉主体，可叠分类角标。"><span class="ar-t"><b>54</b>媒体区</span><span class="ar-en">Media Area</span></button>
        <button class="anat-row" data-anat-row="c2" data-cn="标题" data-en="Title" data-desc="卡片的主标题行，一句话说清这张卡是什么。"><span class="ar-t"><b>55</b>标题</span><span class="ar-en">Title</span></button>
        <button class="anat-row" data-anat-row="c3" data-cn="正文" data-en="Body" data-desc="标题下的说明文字，控制在两到三行，超过则截断或展开。"><span class="ar-t"><b>56</b>正文</span><span class="ar-en">Body</span></button>
        <button class="anat-row" data-anat-row="c4" data-cn="元信息" data-en="Meta" data-desc="作者、时间、来源等附属信息行，弱字色呈现，不与标题争抢。"><span class="ar-t"><b>57</b>元信息</span><span class="ar-en">Meta</span></button>
        <button class="anat-row" data-anat-row="c5" data-cn="操作区" data-en="Actions" data-desc="卡片底部的行动按钮区，主次分明，一般不超过两个。"><span class="ar-t"><b>58</b>操作区</span><span class="ar-en">Actions</span></button>
        <button class="anat-row" data-anat-row="c6" data-cn="角标签" data-en="Media Tag" data-desc="压在媒体区角落的分类或状态小标签，玻璃底反白字。"><span class="ar-t"><b>59</b>角标签</span><span class="ar-en">Tag</span></button>
        <button class="anat-row" data-anat-row="tb1" data-cn="表头" data-en="Table Header" data-desc="表格首行，列名所在；常用小号大写字与分隔线与表体区分。"><span class="ar-t"><b>60</b>表头</span><span class="ar-en">Header</span></button>
        <button class="anat-row" data-anat-row="tb2" data-cn="行" data-en="Row" data-desc="表格的一条记录，悬停整行高亮是最基本的交互反馈。"><span class="ar-t"><b>61</b>行</span><span class="ar-en">Row</span></button>
        <button class="anat-row" data-anat-row="tb3" data-cn="单元格" data-en="Cell" data-desc="行列交汇处的内容格；数字列右对齐或等宽对齐便于比较。"><span class="ar-t"><b>62</b>单元格</span><span class="ar-en">Cell</span></button>
        <button class="anat-row" data-anat-row="tb4" data-cn="排序图标" data-en="Sort Icon" data-desc="表头列名旁的排序指示，点击在升序/降序间切换。"><span class="ar-t"><b>63</b>排序图标</span><span class="ar-en">Sort Icon</span></button>
        <button class="anat-row" data-anat-row="md0" data-cn="遮罩" data-en="Backdrop" data-desc="弹窗之下的半透明遮罩层，压暗背景并拦截点击，也叫 Overlay / Scrim。"><span class="ar-t"><b>64</b>遮罩</span><span class="ar-en">Backdrop</span></button>
        <button class="anat-row" data-anat-row="md2" data-cn="弹窗标题" data-en="Modal Title" data-desc="弹窗顶部的标题，直接说明这次确认/操作的对象与后果。"><span class="ar-t"><b>65</b>弹窗标题</span><span class="ar-en">Title</span></button>
        <button class="anat-row" data-anat-row="md3" data-cn="弹窗正文" data-en="Modal Body" data-desc="标题之下的说明文字，补充细节、影响范围与可逆性。"><span class="ar-t"><b>66</b>弹窗正文</span><span class="ar-en">Body</span></button>
        <button class="anat-row" data-anat-row="md4" data-cn="操作区" data-en="Action Footer" data-desc="弹窗底部的按钮区，破坏性操作放右侧或与取消明确分隔。"><span class="ar-t"><b>67</b>操作区</span><span class="ar-en">Footer</span></button>
        <button class="anat-row" data-anat-row="md5" data-cn="关闭按钮" data-en="Close Button" data-desc="右上角的关闭叉号，是遮罩点击与 Esc 之外的第三条退出路径。"><span class="ar-t"><b>68</b>关闭按钮</span><span class="ar-en">Close</span></button>
        <button class="anat-row" data-anat-row="pg1" data-cn="轨道" data-en="Track" data-desc="进度条未填充部分的底槽，贯穿整个可取值范围。"><span class="ar-t"><b>69</b>轨道</span><span class="ar-en">Track</span></button>
        <button class="anat-row" data-anat-row="pg2" data-cn="填充" data-en="Fill" data-desc="轨道内已推进的部分，宽度即进度值，常带扫光表示进行中。"><span class="ar-t"><b>70</b>填充</span><span class="ar-en">Fill</span></button>
        <button class="anat-row" data-anat-row="pg3" data-cn="进度标签" data-en="Progress Label" data-desc="进度条旁的百分比或状态文字，与填充同步更新。"><span class="ar-t"><b>71</b>进度标签</span><span class="ar-en">Label</span></button>
        <button class="anat-row" data-anat-row="sw1" data-cn="开关轨道" data-en="Switch Track" data-desc="开关的胶囊轨道，承载开/关两种底色状态。"><span class="ar-t"><b>72</b>开关轨道</span><span class="ar-en">Track</span></button>
        <button class="anat-row" data-anat-row="sw2" data-cn="开关滑块" data-en="Switch Thumb" data-desc="轨道内滑动的圆形滑块，切换时带弹簧过冲，是 Switch 的动效主角。"><span class="ar-t"><b>73</b>开关滑块</span><span class="ar-en">Thumb</span></button>
      </div>
    </div></div>`,
  v: ['五块解剖台：图文卡片、可排序表格、带遮罩的弹窗、进度条与开关', '每个零件红色高亮可点，右表 20 条术语'],
  m: ['点选零件或行目，两侧同步高亮并更新详情', '红色高亮脉冲一次后保持，远比蓝描边易辨认']
});
DATA.find(c => c.id === 'animation').items.push(
  {
    n: '液态融合', en: 'Gooey Metaball', k: '粘性融合 · SVG 滤镜',
    d: '两团液态色块靠近时互相粘连融合，即 Metaball / Gooey 效果。',
    h: `<svg width="0" height="0" style="position:absolute"><defs>
      <filter id="gooFilter"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b"/>
      <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="g"/>
      <feComposite in="SourceGraphic" in2="g" operator="atop"/></filter></defs></svg>
      <div class="gooey"><span class="gb gb1"></span><span class="gb gb2"></span><span class="gb gb3"></span></div>`,
    v: ['三枚主题渐变圆球在一条水平带上往返', '整体套一层高斯模糊+对比度拉伸的 SVG 滤镜'],
    m: ['圆球靠近时边缘互相吸附、粘连、再断开，像液滴融合', '滤镜让中间过渡带自然收束出「颈部」', '循环匀速，任何一帧都无跳变']
  },
  {
    n: '粒子星野', en: 'Particle Field', k: '画布粒子 · 漂移闪烁',
    d: 'Canvas 绘制的漂移粒子背景，常用于首屏氛围。',
    h: `<div class="particles"><canvas data-particles width="600" height="300"></canvas></div>`,
    v: ['深色底上散布细小光点，亮度与大小随机', '粒子密度适中，不干扰前景阅读'],
    m: ['每颗粒子以微小速度向量缓慢漂移', '亮度做低幅闪烁，像远处的星', '越界后从对侧重生，数量恒定']
  },
  {
    n: '翻牌数字', en: 'Flip Counter', k: '翻转过渡 · 点击进位',
    d: '数字变化时像翻牌一样翻转过渡。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <div class="flipnum" data-flipnum><span class="fn-d">0</span><span class="fn-d">0</span><span class="fn-d">8</span></div>
      <button class="replay" data-flip-add>+1 翻牌</button></div>`,
    v: ['等宽数字放在带内阴影的翻牌面上，三位一组', '牌面像实体翻页器，底部有暗部'],
    m: ['点击加一时，变化位先向下翻出视野再翻回新数字', '弹簧曲线让翻转带回弹', '进位时从个位连锁翻到高位']
  },
  {
    n: '波浪进度', en: 'Wave Progress', k: '液面起伏 · 遮罩容器',
    d: '容器内液面持续起伏的水位式进度。',
    h: `<div class="wavep"><span class="wp-liquid"></span><span class="wp-liquid l2"></span><b>62%</b></div>`,
    v: ['圆形容器内两层不同相位的液面，底色为强调渐变', '中央百分比读数压在液面之上'],
    m: ['液面做横向摆动加轻微倾摆，两层反相叠加更像真水', '液位高度即进度值，可随数据升降', '读数始终清晰不被液面淹没']
  },
  {
    n: '摇晃反馈', en: 'Shake Feedback', k: '错误抖动 · 方向交替',
    d: '输入错误时的水平摇晃警示，Material 与 iOS 通用。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <div class="shake-box" data-shake-box>验证码错误，请重试</div>
      <button class="replay" data-shake>再次触发抖动</button></div>`,
    v: ['危险色描边与文案的提示块'],
    m: ['触发时沿水平方向交替位移，幅度逐渐衰减', '节奏短促有力，传达「不对，再试」', '与危险色边框配合形成完整错误态']
  },
  {
    n: '脉冲光环', en: 'Pulse Ring', k: '双环外扩 · 点击触发',
    d: '点击后两圈光环依次向外扩散消散。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <button class="pulser" data-pulser>点我脉冲</button>
      <span class="kbd-hint">双环错峰外扩</span></div>`,
    v: ['中央一枚渐变圆钮，光环与按钮同色描边'],
    m: ['点击时生成两圈错峰外扩的光环，放大并淡出', '光环轨迹与按钮同心，像声波扩散', '可连续点击叠加多组光环']
  },
  {
    n: '弹跳进入', en: 'Bounce In', k: '过冲落位 · 弹性关键帧',
    d: '元素带过冲的弹跳入场，比淡入更有生命力。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:16px">
      <div class="boing" data-boing><span class="bi-it">设计</span><span class="bi-it">开发</span><span class="bi-it">测试</span><span class="bi-it">上线</span></div>
      <button class="replay" data-replay="boing">重播弹跳</button></div>`,
    v: ['四枚小胶囊代表流程节点，初始完全隐藏'],
    m: ['自下而上缩放弹入，先过冲到 1.08 再落回', '依次延迟形成波次', '与交错入场相比更强调单个的弹性']
  },
  {
    n: '色相流转', en: 'Hue Cycle', k: '渐变位移 · 循环流色',
    d: '文字与底色沿色相环持续流转。',
    h: `<div class="huec">Hue Cycling</div>`,
    v: ['大号文字用多色渐变裁切，底下垫一层同渐变的淡色光斑', '色标覆盖整个色相环首尾相接'],
    m: ['background-position 匀速循环，颜色像水流过字面', '文字与光斑同步流转，保持一体', '循环无缝，适合标题或品牌词的常驻活力']
  },
  {
    n: '弹性菜单', en: 'Elastic Menu', k: '邻项让位 · 弹簧位移',
    d: '悬停某项时它弹出，邻项被挤开让位。',
    h: `<div class="elam">
      <button data-toast data-msg="打开：工作台">工作台</button>
      <button data-toast data-msg="打开：项目">项目</button>
      <button data-toast data-msg="打开：团队">团队</button>
      <button data-toast data-msg="打开：设置">设置</button></div>`,
    v: ['竖排的普通菜单项列表'],
    m: ['悬停项向右弹出并放大点亮', '其后的邻项被轻推让位，前项保持不动', '弹簧曲线让让位与归位都带一点韧性']
  },
  {
    n: '文字模糊切换', en: 'Text Blur Swap', k: '失焦换词 · 无缝接替',
    d: '两段文案以失焦-对焦的方式交替切换。',
    h: `<div class="tbswap" data-swaptext>
      <b class="inb">为现代界面而生</b><b class="out">给 AI 的提示词库</b></div>`,
    v: ['居中的单行大字文案区，同一时刻只有一句清晰'],
    m: ['当前句上浮并模糊离场，新句自下沉模糊态对焦入场', '模糊与位移同步，像镜头换焦', '循环播放多句标语，节奏舒缓']
  },
  {
    n: '圆环倒计时', en: 'Ring Timer', k: '倒计时弧 · 归零重置',
    d: '圆环随倒计时逐渐消耗，归零可重置。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px">
      <div class="ringt" data-timer>
        <svg viewBox="0 0 120 120"><circle class="rt-bg" cx="60" cy="60" r="55"/>
        <circle class="rt-fg" cx="60" cy="60" r="55"/></svg>
        <b data-timer-tx>10s</b></div>
      <button class="replay" data-timer-go>开始倒计时</button></div>`,
    v: ['与环形进度同构的圆环，中心大号秒数读数'],
    m: ['点击开始后描边偏移随秒数线性消耗', '读数每秒递减，归零时轨道见底', '可随时重置重播']
  },
  {
    n: '果冻按压', en: 'Jelly Press', k: '挤压拉伸 · 果冻回弹',
    d: '按压瞬间做果冻般的挤压拉伸再回弹。',
    h: `<button class="jelly" data-jelly>按我一下</button>`,
    v: ['常规渐变主按钮'],
    m: ['按下触发一次挤压拉伸序列：先压扁再拉长再回正', '曲线用弹簧，末端带轻微余震', '增强「按到了」的触觉暗示']
  }
);

DATA.find(c => c.id === 'layout').items.push({
  n: '材质对照', en: 'Material Gallery', k: '四种玻璃 · 风格取样',
  d: '四类玻璃材质的并排取样，给设计体系定调用。',
  h: `<div class="mats">
    <div class="mat m-frost"><b>磨砂 Frost</b><span>重模糊 · 高透光</span></div>
    <div class="mat m-liquid"><b>液态 Liquid</b><span>渐变底 · 内高光</span></div>
    <div class="mat m-crystal"><b>水晶 Crystal</b><span>亮描边 · 内发光</span></div>
    <div class="mat m-mist"><b>薄雾 Mist</b><span>低对比 · 弱边界</span></div></div>`,
  v: ['2×2 材质取样格，每格标注中文名与特征词', '四类材质仅在模糊、描边、内光、对比四个维度上变化'],
  m: ['悬停单格上浮放大，便于凑近比较质感差异', '可作为液态玻璃体系内再细分的四档预设']
});
/*__DATA__*/
/* ===== 桌面与网格 Desktop & Grid（PC 优先） ===== */
DATA.push({
  id: 'desktop', name: '桌面与网格', en: 'Desktop & Grid',
  ic: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9.5h18"/>',
  items: [
    {
      n: '菜单栏', en: 'Menu Bar', k: '多级下拉 · 快捷键标注',
      d: '桌面应用顶部的文件/编辑/视图/帮助多级菜单系统。',
      h: `<div class="menubar" data-mb>
        <div class="mb-g"><button data-mb-t>文件</button>
          <div class="mb-m">
            <button data-toast data-msg="新建文件">新建…<kbd>Ctrl+N</kbd></button>
            <button data-toast data-msg="打开对话框（演示）">打开…<kbd>Ctrl+O</kbd></button><hr>
            <button data-toast data-msg="已保存">保存<kbd>Ctrl+S</kbd></button>
            <div class="mb-item">导出为<span class="mb-arrow">▸</span>
              <div class="mb-sub"><button data-toast data-msg="导出 PDF">导出 PDF…</button><button data-toast data-msg="导出 PNG">导出 PNG…</button></div></div>
            <hr><button data-toast data-msg="退出（演示）">退出<kbd>Ctrl+Q</kbd></button></div></div>
        <div class="mb-g"><button data-mb-t>编辑</button>
          <div class="mb-m">
            <button data-toast data-msg="已撤销">撤销<kbd>Ctrl+Z</kbd></button>
            <button data-toast data-msg="已重做">重做<kbd>Ctrl+Y</kbd></button><hr>
            <button data-toast data-msg="已剪切">剪切<kbd>Ctrl+X</kbd></button>
            <button data-toast data-msg="已复制">复制<kbd>Ctrl+C</kbd></button>
            <button data-toast data-msg="已粘贴">粘贴<kbd>Ctrl+V</kbd></button></div></div>
        <div class="mb-g"><button data-mb-t>视图</button>
          <div class="mb-m">
            <button data-toast data-msg="侧边栏已切换">侧边栏<kbd>⌘B</kbd></button>
            <button data-toast data-msg="缩放 100%">缩放 100%<kbd>⌘0</kbd></button>
            <button data-toast data-msg="已进入全屏（演示）">全屏<kbd>F11</kbd></button></div></div>
        <div class="mb-g"><button data-mb-t>帮助</button>
          <div class="mb-m">
            <button data-toast data-msg="打开文档（演示）">文档</button>
            <button data-toast data-msg="快捷键一览（演示）">快捷键<kbd>⌘/</kbd></button>
            <button data-toast data-msg="Liquid Glass v2.5">关于</button></div></div>
      </div>`,
      v: ['一条细长的水平菜单栏，项与项之间宽松等距', '下拉面板内：操作名居左、快捷键居右，细线分组'],
      m: ['点击展开所属菜单；展开状态下横向滑过其它菜单直接切换', '二级项悬停时向右飞出子菜单', '点外部或 Esc 收起全部']
    },
    {
      n: '窗口窗框', en: 'Window Frame', k: '标题栏拖动 · 红绿灯',
      d: '桌面窗口的外壳：红绿灯按钮、标题栏与内容区，可拖动。',
      h: `<div class="stage-rel">
        <div class="win" data-win>
          <div class="win-bar" data-win-bar>
            <span class="win-dots"><i class="d1"></i><i class="d2"></i><i class="d3"></i></span>
            <em>组件预览 — Liquid Glass.app</em>
          </div>
          <div class="win-body">
            <div class="win-side"><span></span><span></span><span></span></div>
            <div class="win-main"><b>Window Frame</b><span class="win-line"></span><span class="win-line w70"></span><span class="win-line w45"></span></div>
          </div></div></div>
      <span class="kbd-hint">拖动标题栏移动窗口 · 双击标题栏复位</span>`,
      v: ['标题栏左侧三枚红黄绿窗口钮，中央是窗口标题', '内容区左侧窄导航条 + 右侧正文占位'],
      m: ['按住标题栏可拖动窗口在舞台内移动，越界自动钳制', '双击标题栏弹回原位（带回弹）', '三枚窗口钮悬停浮现符号（关闭/最小化/最大化）']
    },
    {
      n: '浏览器标签条', en: 'Browser Tab Strip', k: '多页签 · 关闭与新建',
      d: '桌面浏览器顶部的标签条：激活、关闭、新建。',
      h: `<div class="strip" data-strip>
        <button class="st-tab on" data-st-tab><i class="st-fav f1"></i><span class="st-txt">文档</span><em data-st-x aria-label="关闭">×</em></button>
        <button class="st-tab" data-st-tab><i class="st-fav f2"></i><span class="st-txt">组件库</span><em data-st-x aria-label="关闭">×</em></button>
        <button class="st-tab" data-st-tab><i class="st-fav f3"></i><span class="st-txt">响应式布局与栅格系统的最佳实践指南</span><em data-st-x aria-label="关闭">×</em></button>
        <button class="st-new" data-st-new aria-label="新建标签">+</button></div>`,
      v: ['梯形/圆角页签横排，激活页签底色与页面连成一体', '每枚页签：站点图标、标题、关闭叉；尾部一个新建钮'],
      m: ['点击页签切换激活态', '点 × 关闭该页签，激活态顺延到相邻页签', '点 + 追加新页签并激活，至少保留一枚']
    },
    {
      n: '状态栏', en: 'Status Bar', k: '常驻信息 · 细字密度',
      d: '编辑器/IDE 底部的常驻状态条。',
      h: `<div class="stbar">
        <span>⎇ main ✓</span><span>0 ↓ 1 ↑</span><span class="sp"></span>
        <span data-st-time>--:--</span><span>行 24, 列 12</span><span>UTF-8</span><span>HTML</span><span>⚡ Prettier</span></div>`,
      v: ['一条 26px 高的细状态条，信息以小号等宽字分段排布', '左右两端分组，中间用弹性空隙隔开'],
      m: ['各信息段悬停时轻微点亮，可挂点击跳转', '时间每分钟自更新', '适合固定在窗口底部，作为常驻层']
    },
    {
      n: '终端', en: 'Terminal', k: '命令回显 · 逐行输出',
      d: '模拟命令行终端的逐行输出与提示符。',
      h: `<div class="term">
        <div class="term-bar"><i></i><i></i><i></i><em>zsh — liquid-glass</em></div>
        <div class="term-body" data-term></div></div>`,
      v: ['顶部窗口点 + 会话标题，下方深色终端区', '等宽字体，提示符与输出分色'],
      m: ['按脚本逐行揭示构建日志：命令、进度、成功摘要', '末尾提示符带闪烁光标', '播完停留后清屏重来，循环演示']
    },
    {
      n: '可调列宽表格', en: 'Resizable Table', k: '拖拽列界 · 列宽钳制',
      d: '拖动表头边界即可调整列宽，PC 数据网格的标配。',
      h: `<table class="rtbl" data-rtbl>
        <colgroup><col style="width:44%"><col style="width:30%"><col style="width:26%"></colgroup>
        <thead><tr>
          <th>组件<span class="rt-h" data-rt-h></span></th>
          <th>分类<span class="rt-h" data-rt-h></span></th>
          <th>状态</th></tr></thead>
        <tbody>
          <tr><td>主按钮</td><td>按钮</td><td><span class="bdg ok" style="padding:2px 8px;font-size:10px"><i></i>稳定</span></td></tr>
          <tr><td>数据表格</td><td>数据</td><td><span class="bdg ok" style="padding:2px 8px;font-size:10px"><i></i>稳定</span></td></tr>
          <tr><td>虚拟列表</td><td>桌面</td><td><span class="bdg info" style="padding:2px 8px;font-size:10px"><i></i>新</span></td></tr>
          <tr><td>分割面板</td><td>桌面</td><td><span class="bdg info" style="padding:2px 8px;font-size:10px"><i></i>新</span></td></tr>
        </tbody></table>
      <span class="kbd-hint">拖动列边界调整列宽</span>`,
      v: ['固定表格布局，列宽由 colgroup 控制', '除末列外，每个表头右缘有一条隐形的拖拽把手'],
      m: ['按住列边界左右拖动，实时改写该列宽度', '最小列宽钳制，防止内容被挤没', '拖动时光标变为 col-resize，列头轻微点亮']
    },
    {
      n: '列头菜单', en: 'Column Menu', k: '排序筛选 · 列级操作',
      d: '表头上的下拉菜单：排序、筛选、隐藏列。',
      h: `<table class="rtbl cm-tbl" data-cmtbl>
        <thead><tr>
          <th>任务 <button class="cm-t" data-cm-t aria-label="列菜单">▾</button>
            <div class="cm-m" data-cm-m>
              <button data-cm-act="asc">↑ 升序排列</button>
              <button data-cm-act="desc">↓ 降序排列</button><hr>
              <button data-toast data-msg="已进入筛选（演示）">⊙ 筛选…</button>
              <button data-toast data-msg="已隐藏该列（演示）">隐藏此列</button></div></th>
          <th>负责人</th><th>截止</th></tr></thead>
        <tbody>
          <tr><td>整理术语表</td><td>林晓岸</td><td>周五</td></tr>
          <tr><td>补齐虚拟列表</td><td>周叙</td><td>周四</td></tr>
          <tr><td>校对提示词</td><td>陈可</td><td>下周一</td></tr>
          <tr><td>发布 v2.6</td><td>林晓岸</td><td>本周五</td></tr>
        </tbody></table>`,
      v: ['表头列名后跟一枚小三角菜单钮', '浮层：排序两项 + 细线 + 筛选/隐藏'],
      m: ['点击三角在表头下锚点展开菜单', '升序/降序按该列文本即时重排行序', '点外部收起']
    },
    {
      n: '行选择表格', en: 'Row Selection Table', 'k': '复选批量 · 半选态',
      d: '带复选框列的表格：全选、半选、批量操作条。',
      h: `<div class="st-wrap" data-seltbl>
        <table class="rtbl">
          <thead><tr><th style="width:44px"><label class="chk"><input type="checkbox" data-st-all aria-label="全选"></label></th><th>文件</th><th>大小</th></tr></thead>
          <tbody>
            <tr><td><label class="chk"><input type="checkbox" data-st-row></label></td><td>index.html</td><td class="num">4.2 KB</td></tr>
            <tr><td><label class="chk"><input type="checkbox" data-st-row></label></td><td>base.css</td><td class="num">21 KB</td></tr>
            <tr><td><label class="chk"><input type="checkbox" data-st-row></label></td><td>data.js</td><td class="num">86 KB</td></tr>
            <tr><td><label class="chk"><input type="checkbox" data-st-row></label></td><td>app.js</td><td class="num">54 KB</td></tr>
          </tbody></table>
        <div class="st-bar" data-st-bar>已选 <b data-st-n>0</b> 项
          <button class="gbtn sm dgr" data-toast data-msg="已批量删除（演示）">批量删除</button>
          <button class="gbtn sm ghost" data-st-clear>取消选择</button></div></div>`,
      v: ['首列是复选框，表头复选框支持全选与半选', '表格下方悬浮批量操作条'],
      m: ['表头复选：未选/半选（indeterminate）/全选三态联动', '有选中行时底部操作条滑入，显示计数', '取消选择复位全部勾选与表头态']
    }
  ]
});

DATA.find(c => c.id === 'desktop').items.push(
  {
    n: '树形表格', en: 'Tree Table', k: '行内展开 · 层级缩进',
    d: '可展开子行的表格，目录与从属数据的常用形态。',
    h: `<table class="rtbl tt" data-tt>
      <thead><tr><th>名称</th><th>更新</th></tr></thead>
      <tbody>
        <tr><td><button class="tt-t" data-tt-t="src">▸ <b>src</b></button></td><td>今天</td></tr>
        <tr data-tt-g="src"><td style="padding-left:34px">components/</td><td>今天</td></tr>
        <tr data-tt-g="src"><td style="padding-left:34px">styles/</td><td>昨天</td></tr>
        <tr><td><button class="tt-t" data-tt-t="dist">▸ <b>dist</b></button></td><td>昨天</td></tr>
        <tr data-tt-g="dist"><td style="padding-left:34px">index.html</td><td>昨天</td></tr>
        <tr><td>package.json</td><td>3 天前</td></tr>
      </tbody></table>`,
      v: ['普通表格骨架，可展开行的名称前带折叠三角', '子行以缩进表达层级'],
      m: ['点击父行三角展开/收起子行，三角旋转半圈', '子行以轻微淡入出现', '再次点击收起，状态互不干扰']
    },
    {
      n: '主从视图', en: 'Master–Detail View', k: '左列右详 · 点击联动',
      d: '左侧列表、右侧详情的经典桌面双栏结构。',
      h: `<div class="md" data-md>
        <div class="md-list">
          <button class="on" data-md-i data-name="林晓岸" data-role="产品设计师" data-desc="负责设计系统与组件库，把提示词工程引入日常。">林晓岸</button>
          <button data-md-i data-name="周叙" data-role="前端工程师" data-desc="主导动效实现与性能优化，维护虚拟列表。">周叙</button>
          <button data-md-i data-name="陈可" data-role="产品经理" data-desc="跟进需求优先级与发布节奏，对齐各方预期。">陈可</button></div>
        <div class="md-detail"><b data-md-n>林晓岸</b><span data-md-r>产品设计师</span><p data-md-d>负责设计系统与组件库，把提示词工程引入日常。</p></div></div>`,
      v: ['左窄右宽双栏：左列可点名单，右栏展示选中项详情', '左列选中项高亮并带指示'],
      m: ['点击左列条目，右栏姓名/角色/简介同步淡入更新', '左列选中态滑动迁移', '适合邮件、后台管理、IM 的经典布局']
    },
    {
      n: '属性检查器', en: 'Inspector', k: '分组键值 · 就地折叠',
      d: '设计/调试工具右侧的属性检查器面板。',
      h: `<div class="insp" data-insp>
        <div class="insp-g open"><button data-insp-t>布局<span>▾</span></button>
          <div class="insp-c">
            <div class="insp-r"><span>display</span><b>flex</b></div>
            <div class="insp-r"><span>gap</span><b>12px</b></div>
            <div class="insp-r"><span>padding</span><b>16 · 20</b></div></div></div>
        <div class="insp-g"><button data-insp-t>外观<span>▾</span></button>
          <div class="insp-c">
            <div class="insp-r"><span>radius</span><b>16px</b></div>
            <div class="insp-r"><span>blur</span><b>24px</b></div>
            <div class="insp-r"><span>border</span><b>1px glass</b></div></div></div>
        <div class="insp-g"><button data-insp-t>交互<span>▾</span></button>
          <div class="insp-c">
            <div class="insp-r"><span>transition</span><b>.35s ease</b></div>
            <div class="insp-r"><span>cursor</span><b>pointer</b></div></div></div></div>`,
      v: ['窄面板内分组的键值对列表：属性名弱字色、值等宽强调色', '每组标题可点击折叠'],
      m: ['点击分组标题展开/收起该组键值，箭头旋转', '组内键值行悬停轻微点亮', '展开高度平滑过渡']
    },
    {
      n: '可拖分割面板', en: 'Split Pane', k: '分割条拖动 · 比例钳制',
      d: '左右两栏由可拖动的分割条分开，桌面布局的骨架。',
      h: `<div class="sp" data-split>
        <div class="sp-pane sp-l"><b>侧栏</b><p>按住中间的分割条左右拖动，调整两栏占比。最小 20%、最大 70%。</p></div>
        <div class="sp-div" data-sp-div title="拖动调整宽度"></div>
        <div class="sp-pane sp-r"><b>主内容</b><p>Split Pane / Resizer 是 IDE、邮件客户端、后台系统最底层的布局模式。</p></div></div>`,
      v: ['等高的左右两栏，中间一条 6px 的分割条', '分割条中央有抓手点纹，悬停点亮'],
      m: ['按住分割条拖动，实时改变左栏占比', '比例钳制在 20%–70% 之间', '松手即定格，精确优先于趣味']
    },
    {
      n: '虚拟列表', en: 'Virtual List', k: '万行数据 · 只渲可视',
      d: '一万行数据只渲染可见区，滚动依旧丝滑。',
      h: `<div class="vl" data-vlist data-vn="10000">
        <div class="vl-sp" data-v-sp></div>
        <div class="vl-win" data-v-win></div></div>
      <span class="kbd-hint">共 10,000 行 · DOM 中仅挂可见区</span>`,
      v: ['固定高度的滚动视口，内部是绝对定位的行窗口', '行高恒定，便于精确计算偏移'],
      m: ['滚动时根据 scrollTop 计算可见行区间，只渲染前后各多一行', '总高度由 总行数×行高 撑开，滚动条比例真实', '万行规模下 DOM 节点数保持在个位数级别']
    },
    {
      n: '文件资源管理器', en: 'File Explorer', k: '地址栏 · 树列联动',
      d: '左树右列的文件管理器布局。',
      h: `<div class="fx" data-fx>
        <div class="fx-addr">项目 <span>›</span> <b data-fx-addr>src</b></div>
        <div class="fx-body">
          <div class="fx-tree">
            <button class="on" data-fx-t="src">📁 src</button>
            <button data-fx-t="assets">📁 assets</button>
            <button data-fx-t="root">📁 项目根目录</button></div>
          <div class="fx-list" data-fx-list></div></div></div>`,
      v: ['顶部地址栏面包屑，下方左树右列表', '树项可选中，列表行含图标、名称、大小'],
      m: ['点击左侧目录，右侧列表与地址栏同步切换', '列表行悬停点亮并右移半步', '空目录给出「空文件夹」占位行']
    },
    {
      n: '内联编辑单元格', en: 'Inline Editable Cell', k: '双击编辑 · 回车提交',
      d: '表格单元格双击进入编辑，回车提交、Esc 取消。',
      h: `<table class="rtbl" data-inline>
        <thead><tr><th>属性（双击单元格）</th><th>值</th></tr></thead>
        <tbody>
          <tr><td data-edit>液态玻璃</td><td data-edit>#6D7DFF</td></tr>
          <tr><td data-edit>弹簧曲线</td><td data-edit>0.34, 1.56, .64</td></tr>
          <tr><td data-edit>模糊半径</td><td data-edit>24px</td></tr>
        </tbody></table>`,
      v: ['普通只读表格，单元格悬停时出现淡淡的编辑暗示（虚线内框）'],
      m: ['双击单元格原地变为输入框，内容自动全选', '回车提交并退出编辑（带轻提示），Esc 放弃修改', '失焦等同提交；编辑中单元格描边点亮']
    }
);
/* 桌面分类排在术语图之前 */
{ const i = DATA.findIndex(c => c.id === 'desktop'); const j = DATA.findIndex(c => c.id === 'anatomy'); if (i > -1 && j > -1 && i > j) { const d = DATA.splice(i, 1)[0]; DATA.splice(j, 0, d); } }

DATA.find(c => c.id === 'anatomy').items.push({
  n: '浏览器部位图', en: 'Browser Anatomy', k: '标签条零件 · 浏览器外壳', wide: true,
  d: '浏览器标签条与工具条的零件级命名——PC 网页最外层的那层壳，每个零件叫什么。',
  h: `<div class="anat">
    <div class="anat-map anat-nav">
      <div class="an-block">
        <div class="a2-label">标签条 Tab Strip</div>
        <div class="brw-tabs" data-anat-zone="br0">
          <div class="brw-tab pin" data-anat-zone="br8"><i class="brw-fav f1" data-anat-zone="br3"></i></div>
          <div class="brw-tab on" data-anat-zone="br1">
            <i class="brw-fav f2" data-anat-zone="br3"></i>
            <span data-anat-zone="br4">组件文档</span>
            <em data-anat-zone="br5" aria-label="关闭">×</em></div>
          <div class="brw-tab" data-anat-zone="br1">
            <i class="brw-fav f3" data-anat-zone="br3"></i>
            <span data-anat-zone="br4">动效参考</span>
            <em data-anat-zone="br5">×</em></div>
          <button class="brw-new" data-anat-zone="br6" aria-label="新建标签">+</button>
        </div>
      </div>
      <div class="an-block">
        <div class="a2-label">工具条 Toolbar</div>
        <div class="brw-bar" data-anat-zone="br9">
          <button class="brw-btn" data-anat-zone="br10">⟳</button>
          <div class="brw-addr" data-anat-zone="br2"><span data-anat-zone="br11">🔒</span><em data-anat-zone="br12">127.0.0.1:8642/components</em></div>
          <button class="brw-btn" data-anat-zone="br7">☆</button>
          <button class="brw-btn" data-anat-zone="br13">⤓</button>
        </div>
      </div>
    </div>
    <div class="anat-terms">
      <div class="anat-detail" data-anat-detail></div>
      <div class="anat-rows">
        <button class="anat-row" data-anat-row="br0" data-cn="标签条" data-en="Tab Strip" data-desc="承载全部页签的容器条，可横向滚动；专业名 Tab Strip，是浏览器外壳的第一层。"><span class="ar-t"><b>74</b>标签条</span><span class="ar-en">Tab Strip</span></button>
        <button class="anat-row" data-anat-row="br1" data-cn="页签" data-en="Tab" data-desc="单个标签页的可视化载体：站点图标 + 标题 + 关闭钮；同一时刻只有一枚处于激活态。"><span class="ar-t"><b>75</b>页签</span><span class="ar-en">Tab</span></button>
        <button class="anat-row" data-anat-row="br3" data-cn="站点图标" data-en="Favicon" data-desc="页签最左侧的小图标，来自网站 favicon，用于一眼识别站点；专业名 Favicon。"><span class="ar-t"><b>76</b>站点图标</span><span class="ar-en">Favicon</span></button>
        <button class="anat-row" data-anat-row="br4" data-cn="页签标题" data-en="Tab Title" data-desc="页签上的页面标题，过长时以省略号截断；来自 document.title。"><span class="ar-t"><b>77</b>页签标题</span><span class="ar-en">Tab Title</span></button>
        <button class="anat-row" data-anat-row="br5" data-cn="关闭按钮" data-en="Close Button" data-desc="页签尾部的 ×，关闭当前标签；悬停才高亮，避免误触。"><span class="ar-t"><b>78</b>关闭按钮</span><span class="ar-en">Close Button</span></button>
        <button class="anat-row" data-anat-row="br6" data-cn="新建标签按钮" data-en="New Tab Button" data-desc="标签条尾部的 +，点击在右侧追加一枚空白页签并激活。"><span class="ar-t"><b>79</b>新建标签按钮</span><span class="ar-en">New Tab</span></button>
        <button class="anat-row" data-anat-row="br8" data-cn="固定标签" data-en="Pinned Tab" data-desc="收起标题只留站点图标的窄页签，常驻最左侧，用于邮箱、日历等常开页面。"><span class="ar-t"><b>80</b>固定标签</span><span class="ar-en">Pinned Tab</span></button>
        <button class="anat-row" data-anat-row="br9" data-cn="浏览器工具条" data-en="Browser Toolbar" data-desc="标签条之下的操作行：导航钮、地址栏、功能钮，合称 Toolbar。"><span class="ar-t"><b>81</b>浏览器工具条</span><span class="ar-en">Toolbar</span></button>
        <button class="anat-row" data-anat-row="br2" data-cn="地址栏" data-en="Address Bar" data-desc="显示并输入网址的长条，也叫 URL Bar / Omnibox；安全站点前置锁形图标。"><span class="ar-t"><b>82</b>地址栏</span><span class="ar-en">Address Bar</span></button>
        <button class="anat-row" data-anat-row="br10" data-cn="刷新按钮" data-en="Refresh Button" data-desc="重新加载当前页面的 ⟳ 钮，加载中通常变为停止钮 ×。"><span class="ar-t"><b>83</b>刷新按钮</span><span class="ar-en">Refresh</span></button>
        <button class="anat-row" data-anat-row="br11" data-cn="安全指示" data-en="Security Indicator" data-desc="地址栏左侧的锁形图标，表示 HTTPS 加密连接，点击可查看证书详情。"><span class="ar-t"><b>84</b>安全指示</span><span class="ar-en">Security</span></button>
        <button class="anat-row" data-anat-row="br12" data-cn="网址文本" data-en="URL Text" data-desc="地址栏中展示的完整或截断网址，聚焦时可编辑并全选。"><span class="ar-t"><b>85</b>网址文本</span><span class="ar-en">URL Text</span></button>
        <button class="anat-row" data-anat-row="br7" data-cn="收藏按钮" data-en="Bookmark Button" data-desc="地址栏旁的星标，点击将当前页加入书签，已收藏时点亮。"><span class="ar-t"><b>86</b>收藏按钮</span><span class="ar-en">Bookmark</span></button>
        <button class="anat-row" data-anat-row="br13" data-cn="下载按钮" data-en="Download Button" data-desc="工具条上的下载入口，有进行中任务时显示进度或角标。"><span class="ar-t"><b>87</b>下载按钮</span><span class="ar-en">Download</span></button>
      </div>
    </div></div>`,
  v: ['上半是浏览器外壳的缩略解剖：固定标签、激活页签、新建钮组成的标签条 + 含地址栏的工具条', '每个零件红色高亮可点，右表 14 条术语'],
  m: ['点选零件或术语行，两侧联动并更新详情', '激活页签与未激活页签并排对照，固定标签形态一并展示']
});

DATA.find(c => c.id === 'desktop').items.push(
  {
    n: '可折叠侧边栏', en: 'Collapsible Sidebar', k: '宽度切换 · 图标导轨',
    d: 'PC 后台标配：宽窄两态的侧边导航，收起后只剩图标导轨。',
    h: `<div style="display:flex;gap:14px;align-items:flex-start;width:100%;justify-content:center">
      <div class="psb" data-psb>
        <button class="psb-toggle" data-psb-t aria-label="折叠">≡</button>
        <button class="psb-i on"><span>▦</span><em>总览</em></button>
        <button class="psb-i"><span>◈</span><em>组件</em></button>
        <button class="psb-i"><span>↗</span><em>发布</em></button>
        <button class="psb-i"><span>⚙</span><em>设置</em></button></div>
      <div style="padding-top:20px;font-size:12px;color:var(--ink-3);line-height:1.8;max-width:170px">
        点击顶钮折叠。<br>宽态显示「图标+文字」，<br>窄态只剩图标导轨。</div></div>`,
      v: ['宽态：图标 + 文字的竖排导航；窄态：等宽图标导轨', '顶部一枚折叠触发钮'],
      m: ['点击折叠钮在 220px 与 66px 之间平滑过渡', '文字标签淡出，图标居中重排', '选中态的浅底块跟随收缩']
    },
    {
      n: '表格工具条', en: 'Table Toolbar', k: '检索筛选 · 列设导出',
      d: '数据表格上方的操作行：搜索、筛选、列设置、导出。',
      h: `<div class="ttool">
        <div class="srch" style="width:180px;padding:8px 12px">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.2-4.2"/></svg>
          <input placeholder="筛选条目…" aria-label="筛选"></div>
        <span class="tg" style="padding:4px 11px">状态：进行中 ×</span>
        <div class="ttool-r">
          <button class="gbtn sm soft" data-toast data-msg="列设置面板（演示）">⚙ 列设置</button>
          <button class="gbtn sm primary" data-toast data-msg="已导出 CSV（演示）">⤓ 导出</button></div></div>`,
      v: ['一行式工具条：左检索、中已选筛选标签、右操作按钮组', '整体与下方表格同宽，行高紧凑'],
      m: ['按钮保持常规悬停反馈', '适配固定在表格顶部随页面滚动']
    },
    {
      n: '表单分栏', en: 'Form Layout', k: '标签左置 · 帮助挂尾',
      d: 'PC 后台的经典表单：标签左列固定宽，控件右列，帮助文本挂尾。',
      h: `<div class="flay">
        <div class="flay-r"><label>项目名称<i>*</i></label>
          <div><input class="flay-in" value="Liquid Glass" aria-label="项目名称"><span class="flay-help">将显示在工作区标题</span></div></div>
        <div class="flay-r"><label>可见性</label>
          <div style="display:flex;gap:10px;padding-top:4px">
            <label class="chk"><input type="radio" name="fl" checked><span>公开</span></label>
            <label class="chk"><input type="radio" name="fl"><span>私有</span></label></div></div>
        <div class="flay-r"><label>描述</label>
          <div><textarea class="flay-in" rows="2" placeholder="可选" aria-label="描述"></textarea></div></div></div>`,
      v: ['每行两列：左列标签右对齐并带必填星号，右列控件', '帮助文本紧贴控件下方，弱字色'],
      m: ['控件聚焦时整行的标签可同步点亮', '行与行之间用间距而非重线分隔', '左列宽度恒定，右列弹性']
    },
    {
      n: '级联选择', en: 'Cascader', k: '多级联动 · 路径回显',
      d: '省→市两级联动选择，选中回显完整路径。',
      h: `<div class="casc" data-casc>
        <div class="casc-cur" data-casc-cur>选择地区…</div>
        <div class="casc-pop" data-casc-pop>
          <div class="casc-col" data-casc-p>
            <button class="on" data-casc-prov="浙江">浙江</button>
            <button data-casc-prov="江苏">江苏</button>
            <button data-casc-prov="广东">广东</button></div>
          <div class="casc-col" data-casc-c></div></div></div>`,
      v: ['触发器回显已选路径（如 浙江 / 杭州）', '浮层内左右两列：省列表 + 对应市列表'],
      m: ['点击省份，右列即时换成该省的城市列表', '点击城市后回写路径并收起', '当前省/市高亮，箭头旋转']
    },
    {
      n: '穿梭框', en: 'Transfer', k: '双栏互移 · 勾选穿梭',
      d: '左右双列表 + 穿梭按钮的批量选择器，后台权限配置常客。',
      h: `<div class="tf" data-transfer>
        <div class="tf-col"><b>可选 <span data-tf-nl>4</span></b>
          <label class="tf-i"><input type="checkbox" data-tf-item>读取</label>
          <label class="tf-i"><input type="checkbox" data-tf-item>写入</label>
          <label class="tf-i"><input type="checkbox" data-tf-item>删除</label>
          <label class="tf-i"><input type="checkbox" data-tf-item>导出</label></div>
        <div class="tf-btns">
          <button data-tf-go="r" aria-label="移到右">›</button>
          <button data-tf-go="l" aria-label="移到左">‹</button></div>
        <div class="tf-col"><b>已选 <span data-tf-nr>0</span></b></div></div>`,
      v: ['左右两个带标题计数的列表面板，中间竖排两个方向钮', '条目为整行复选'],
      m: ['勾选左侧条目后点 › 移入右栏，计数同步', '右栏勾选后点 ‹ 移回', '移动的条目带短促的滑入动画']
    },
    {
      n: '账户菜单', en: 'Account Menu', k: '头像入口 · 下拉三项',
      d: 'PC 顶栏右侧的账户下拉：资料、设置、退出。',
      h: `<div class="acct-wrap">
        <button class="acct-t" data-acct-t><span class="acct-av">林</span>林晓岸<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="acct-m" data-acct-m>
          <div class="acct-head"><span class="acct-av">林</span><div><b>林晓岸</b><span>lin@liquid.glass</span></div></div><hr>
          <button data-toast data-msg="打开个人资料">个人资料</button>
          <button data-toast data-msg="打开账户设置">账户设置</button><hr>
          <button class="danger" data-toast data-msg="已退出（演示）">退出登录</button></div></div>`,
      v: ['触发器：头像 + 名字 + 下箭头', '浮层：账户信息头 + 分组的操作项，退出为危险色'],
      m: ['点击展开/收起，箭头旋转', '悬停项局部点亮，危险项红色', '点外部收起']
    },
    {
      n: '快捷键速查', en: 'Cheatsheet', k: '组合键表 · 即时过滤',
      d: '快捷键对照表，支持即时过滤，PC 工具的说明书。',
      h: `<div class="cheat" data-cheat>
        <input class="cheat-f" placeholder="过滤快捷键，如 save / 保存…" aria-label="过滤">
        <div class="cheat-list" data-cheat-list>
          <div class="cheat-r" data-cheat-r><span>保存文件</span><span><kbd class="k">Ctrl</kbd><kbd class="k">S</kbd></span></div>
          <div class="cheat-r" data-cheat-r><span>命令面板</span><span><kbd class="k">Ctrl</kbd><kbd class="k">K</kbd></span></div>
          <div class="cheat-r" data-cheat-r><span>快速打开</span><span><kbd class="k">Ctrl</kbd><kbd class="k">P</kbd></span></div>
          <div class="cheat-r" data-cheat-r><span>切换侧栏</span><span><kbd class="k">Ctrl</kbd><kbd class="k">B</kbd></span></div>
          <div class="cheat-r" data-cheat-r><span>撤销</span><span><kbd class="k">Ctrl</kbd><kbd class="k">Z</kbd></span></div></div></div>`,
      v: ['顶部过滤输入，下方「动作名 ↔ 组合键」两列对照表', '组合键用键帽样式呈现'],
      m: ['输入即时过滤行，不匹配的行隐藏', '键帽悬停时轻微抬起', '无匹配时显示空态行']
    },
    {
      n: '活动栏', en: 'Activity Bar', k: '垂直图标轨 · 视图切换',
      d: '编辑器左侧的垂直图标导航（VS Code 式 Activity Bar）。',
      h: `<div class="actbar">
        <button class="on" data-toast data-msg="资源管理器"><span>▤</span><i></i></button>
        <button data-toast data-msg="全局搜索"><span>⌕</span></button>
        <button data-toast data-msg="源代码管理"><span>⑂</span><i class="dot"></i></button>
        <button data-toast data-msg="扩展市场"><span>⬡</span></button>
        <button data-toast data-msg="账户"><span>◯</span></button></div>`,
      v: ['一条窄的垂直图标轨，图标等距竖排', '选中项左侧有亮条指示，可挂通知点'],
      m: ['点击切换选中态，亮条上下移动', '悬停图标点亮', '通知点做低幅脉冲']
    }
);

DATA.find(c => c.id === 'layout').items.push(
  {
    n: '页头', en: 'Page Header', k: '面包屑 · 标题 · 操作',
    d: 'PC 每个内页的标准页头：面包屑、标题、元信息与页面级操作。',
    h: `<div class="phead">
      <div class="crumbs" style="margin-bottom:8px">
        <a href="#">首页</a><span class="sep">›</span><a href="#">组件</a><span class="sep">›</span><b>桌面与网格</b></div>
      <div class="phead-row">
        <div><h4>数据表格</h4><span>可排序 · 可选择 · 15 个相关组件</span></div>
        <div class="phead-acts">
          <button class="gbtn sm soft" data-toast data-msg="已分享链接">分享</button>
          <button class="gbtn sm primary" data-toast data-msg="打开文档（演示）">文档</button></div></div></div>`,
      v: ['上行面包屑，下行「标题+元信息」与右侧操作组', '页头与下方内容以留白而非粗线分隔'],
      m: ['操作按钮保持常规悬停反馈', '标题可随滚动缩小为紧凑态（吸顶场景）']
    },
    {
      n: '结果页', en: 'Result Page', k: '成败终态 · 双出口',
      d: '流程结束的结果反馈页：成功/失败图标、说明与双操作出口。',
      h: `<div class="rslt">
        <div class="rslt-ic">✓</div>
        <h4>提交成功</h4>
        <p>你的申请已进入审核队列，预计 1 个工作日内完成。<br>结果将通过站内信与邮件通知。</p>
        <div class="rslt-acts">
          <button class="gbtn soft" data-toast data-msg="返回列表（演示）">返回列表</button>
          <button class="gbtn primary" data-toast data-msg="查看详情（演示）">查看详情</button></div></div>`,
      v: ['居中纵排：大号状态图标、标题、两行说明、双按钮出口', '成功用语义色圆底图标'],
      m: ['图标入场带一次缩放弹跳', '说明文字随后淡入', '双按钮常规悬停反馈']
    },
    {
      n: '仪表盘片段', en: 'Dashboard Panel', k: '指标并排 · 面板容器',
      d: '后台首页的典型片段：面板容器 + 四格指标 + 迷你趋势。',
      h: `<div class="dsh">
        <div class="dsh-top"><b>本周概览</b><span>10 月 13 日 – 19 日</span></div>
        <div class="dsh-stats">
          <div class="dsh-s"><span>访问</span><b data-live data-fmt="k" data-v="12.4">12.4k</b><i class="up">▲ 8%</i></div>
          <div class="dsh-s"><span>注册</span><b data-live data-fmt="n" data-v="386">386</b><i class="up">▲ 3%</i></div>
          <div class="dsh-s"><span>留存</span><b data-live data-fmt="pct" data-v="61">61%</b><i class="dn">▼ 1%</i></div>
          <div class="dsh-s"><span>收入</span><b data-live data-fmt="money" data-v="48">¥48k</b><i class="up">▲ 12%</i></div></div>
        <div class="bars" style="height:70px;margin-top:16px">
          <span class="bar"><i data-h="42"></i></span><span class="bar"><i data-h="58"></i></span>
          <span class="bar hi"><i data-h="86"></i></span><span class="bar"><i data-h="64"></i></span>
          <span class="bar"><i data-h="73"></i></span><span class="bar"><i data-h="51"></i></span></div></div>`,
      v: ['玻璃面板：标题行 + 四格指标（标签/数值/涨跌）+ 底部迷你柱状', '涨绿跌红'],
      m: ['柱状沿用逐柱拔起的入场', '面板悬停轻微抬升', '指标数值可用数字滚动接入']
    },
    {
      n: '栅格系统', en: 'Grid System', k: '列数切换 · 栏沟演示',
      d: 'PC 布局的地基：可切换列数的栅格与栏沟演示。',
      h: `<div style="display:flex;flex-direction:column;gap:12px;width:100%">
        <div class="g12" data-grid12 data-cols="12"></div>
        <div style="display:flex;gap:8px;justify-content:center">
          <button class="replay" data-grid-set="8">8 栏</button>
          <button class="replay" data-grid-set="12">12 栏</button>
          <button class="replay" data-grid-set="24">24 栏</button></div>
        <span class="kbd-hint" style="text-align:center">列间空隙即栏沟 Gutter · 列数是布局的分辨率</span></div>`,
      v: ['一排等宽的强调色列块，列间留出栏沟', '下方切换列数的控制钮'],
      m: ['切换列数时列块数量平滑重组，宽度过渡', '列块入场带轻微的级联落位', '演示 8/12/24 三种业界常用栅格']
    }
);

DATA.find(c => c.id === 'animation').items.push(
  {
    n: '弹性网格', en: 'Hover Grid', k: '邻居联动 · 辉光扩散',
    d: '悬停格子点亮，邻格以延迟弹簧跟随，像触碰一片光。',
    h: `<div class="hgrid" data-hgrid>
      ${Array.from({ length: 36 }, () => '<i></i>').join('')}
    </div>`,
    v: ['6×6 的暗色格阵，格子间留细缝', '静置时整片安静无光'],
    m: ['指针所到的格子点亮为主题色', '周围邻居按距离依次延迟点亮再熄灭，形成扩散波', '离开后整片渐暗归零']
  },
  {
    n: '词条翻转', en: 'Word Flip', k: '垂直翻牌 · 循环换词',
    d: '词条像翻牌机一样垂直翻转换词。',
    h: `<div class="wflip" data-wflip>
      <span class="wf-cur">组件</span>
      <span class="wf-next">动效</span></div>
      <span class="kbd-hint">每隔 2 秒向上翻出下一个词</span>`,
    v: ['一个固定高度的词窗，当前词居中显示', '窗口上下缘做暗部遮罩，像实体翻牌器'],
    m: ['当前词向上翻出视野，下一个词从下方翻入', '两面共用一条旋转轴，带轻微过冲', '词表循环，节拍稳定']
  },
  {
    n: '路径跟随', en: 'Path Follower', k: '运动路径 · offset-path',
    d: '光点沿任意路径持续行进，CSS 运动路径标准做法。',
    h: `<div class="pfollow">
      <svg viewBox="0 0 260 120" fill="none">
        <path id="pfPath" d="M20 90 C60 10 100 10 130 60 S200 110 240 30" stroke="var(--bd)" stroke-width="2" stroke-dasharray="5 6"/>
      </svg>
      <span class="pf-dot"></span></div>`,
    v: ['一条虚线路径横贯画布，一枚发光圆点吸附其上'],
    m: ['圆点以 offset-path 沿路径匀速行进，首尾无缝循环', '行进中保持与路径切线一致的方向感', '路径本身可任意替换成别的曲线']
  },
  {
    n: '点阵脉冲', en: 'Matrix Pulse', k: '波次点亮 · 阵列呼吸',
    d: '点阵按波次依次亮起又熄灭，像矩阵呼吸。',
    h: `<div class="mpulse">
      ${Array.from({ length: 48 }, (_, i) => `<i style="animation-delay:${((i % 8) + Math.floor(i / 8)) * 0.12}s"></i>`).join('')}
    </div>`,
    v: ['8×6 的圆点阵列，静置时为弱底色小点'],
    m: ['按对角波次依次点亮再回落，循环往复', '每点只做透明度与轻微缩放，性能友好', '适合作为区块的常驻环境动效']
  },
  {
    n: '翻转菜单', en: 'Flip Menu', k: '双面旋开 · 背面操作',
    d: '菜单项点击后绕纵轴翻到背面，背面是操作按钮。',
    h: `<div class="fmenu" data-flip>
      <div class="fm-in">
        <div class="fm-face front"><b>任务 · 评审组件库</b><span>点击翻转查看背面操作</span></div>
        <div class="fm-face back"><button data-toast data-msg="已通过评审">通过</button><button data-toast data-msg="已退回修改">退回</button></div>
      </div></div>`,
    v: ['一张任务卡，正面标题说明，背面两个操作按钮', '双面共享 3D 翻转舞台'],
    m: ['点击卡片绕纵轴翻到背面，按钮组随之可用', '再点翻回，双向一致', '翻转期间背面对点击可用、正面无热区']
  },
  {
    n: '分段推进', en: 'Segmented Progress', k: '逐格填充 · 阶段完成',
    d: '进度被切成若干段，按阶段逐格点亮。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px;width:100%">
      <div class="segprg" data-segprg>
        ${Array.from({ length: 8 }, () => '<i></i>').join('')}</div>
      <div style="display:flex;gap:12px;align-items:center">
        <button class="replay" data-segprg-go>推进一格</button>
        <button class="replay" data-segprg-reset>重置</button></div></div>`,
    v: ['一排等宽的圆角段，未完成为弱底色，完成为强调实底'],
    m: ['每点一次推进一格，当前格带一次缩放回弹', '已点亮的段保持实底', '可重置回零重播']
  },
  {
    n: '虹膜切换', en: 'Iris Wipe', k: '圆形揭示 · clip-path',
    d: '圆形遮罩从中心扩张/收缩，揭示或隐藏下层画面。',
    h: `<div style="display:flex;flex-direction:column;align-items:center;gap:12px">
      <div class="iris" data-iris>
        <div class="iris-a"><b>层 A</b><span>渐变底 · 初始可见</span></div>
        <div class="iris-b"><b>层 B</b><span>玻璃底 · 圆形揭示</span></div></div>
      <button class="replay" data-iris-toggle>切换图层</button></div>`,
    v: ['两层全幅画面叠放，上层用圆形 clip-path 裁切'],
    m: ['点击时上层的圆形遮罩半径在 0 与全覆盖之间过渡', '揭示边缘锐利，无羽化，像光圈开合', '可反复切换两层']
  },
  {
    n: '蹦极拉伸', en: 'Elastic Tether', k: '拉伸跟随 · 橡皮归位',
    d: '拖拽时物体朝指针方向拉长，松手弹回并震荡。',
    h: `<div class="tether" data-tether>
      <div class="td-ball" data-td-ball>拖我</div>
      <span class="drag-hint">按住拖动 · 松手回弹震荡</span></div>`,
    v: ['虚线边界活动区，中央一枚可拖拽圆钮'],
    m: ['拖动时圆钮朝指针方向位移并沿位移方向拉伸形变', '松手后以强过冲弹簧弹回原位', '归位过程带逐渐衰减的震荡']
  },
  {
    n: '换位动画', en: 'FLIP Reorder', k: '量位重排 · 位置补间',
    d: '重排列表时用 FLIP 技法让每项平滑飞到新位置。',
    h: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:250px">
      <div class="flip-list" data-flip-list>
        <div class="fl-i">第一项 Alpha</div>
        <div class="fl-i">第二项 Beta</div>
        <div class="fl-i">第三项 Gamma</div>
        <div class="fl-i">第四项 Delta</div></div>
      <button class="replay" data-flip-shuffle>随机重排</button></div>`,
    v: ['四条等高的列表项，纵向排列'],
    m: ['点击重排：先记录每项旧位置（First）', 'DOM 交换顺序后读取新位置（Last）', '用位移补间从旧位飞到新位（Invert · Play），即标准 FLIP']
  },
  {
    n: '百叶开启', en: 'Louver Reveal', k: '竖条开启 · 揭示下层',
    d: '一组竖条像百叶窗一样开启，露出下层内容。',
    h: `<div class="louver" data-louver>
      <div class="lv-under"><b>被遮住的内容</b><span>悬停或点按钮开启百叶</span></div>
      ${Array.from({ length: 7 }, (_, i) => `<span class="lv-bar" style="transition-delay:${i * 0.05}s"></span>`).join('')}
      <button class="replay" data-louver-toggle style="position:absolute;bottom:10px;right:10px;z-index:3">开/关</button></div>`,
    v: ['下层是目标内容，上层七根等宽竖条完全遮盖', '竖条为强调渐变'],
    m: ['开启时每根竖条向上收回，按序延迟形成百叶效果', '关闭时依次落下重新遮盖', '悬停也可触发，像掀开帘子偷看']
  },
  {
    n: '轨道系统', en: 'Orbit System', k: '多体公转 · 层次轨道',
    d: '多颗卫星沿各自轨道绕中心天体公转。',
    h: `<div class="orbits">
      <span class="or-sun"></span>
      <span class="or-p o1"><i></i></span>
      <span class="or-p o2"><i></i></span>
      <span class="or-p o3"><i></i></span></div>`,
    v: ['中央发光恒星，外圈三条虚线轨道', '每条轨道上一颗卫星'],
    m: ['三颗卫星以不同周期公转，速度各异', '轨道环自身极淡，只作空间参考', '循环无缝，可作常驻氛围层']
  },
  {
    n: '墨滴扩散', en: 'Ink Drop', k: '不规则蔓延 · 点击生成',
    d: '点击处涌出不规则墨斑，蔓延后淡出。',
    h: `<div class="inkz" data-ink>
      <span>在此区域点击 · 墨滴扩散</span></div>`,
    v: ['低对比的画布区域，等待点击'],
    m: ['点击处生成一枚不规则边缘的墨斑', '墨斑以形变的圆角向外蔓延并加深', '随后整体淡出，支持连续点击叠加']
  }
);

DATA.push({
  id: 'fullpage', name: '整页场景', en: 'Full-Page Scenes',
  ic: '<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9h17M8 14l2.5 2.5L16 11"/>',
  items: [
    {
      n: '全屏首屏', en: 'Fullscreen Hero', k: '一屏一景 · 向下引导',
      d: '官网第一屏的整屏画面：主张、副文、双 CTA 与下滑引导。业内叫 Fullscreen Hero / One-Page Hero。',
      h: `<div class="onesite" data-onesite>
        <section class="os-sec os-hero">
          <span class="fp-eye">LIQUID GLASS · 2026</span>
          <h3>一整屏，只讲一件事</h3>
          <p>这是一段可真实滚动的整页网站：三屏、吸附翻页、右侧导航点都能操作。</p>
          <div class="fp-acts">
            <button class="gbtn primary" data-os-next>立即开始</button>
            <button class="gbtn ghost" data-fpplay>观看演示</button></div>
          <button class="os-scroll" data-os-next>SCROLL ↓</button>
        </section>
        <section class="os-sec os-feat">
          <h4>为什么是整页</h4>
          <p>每一屏只讲一件事：吸附加节奏，滚动驱动叙事，CTA 只留一个。</p>
          <div class="os-feats">
            <div class="os-f">一屏一事<em>FOCUS</em></div>
            <div class="os-f">吸附翻页<em>SNAP</em></div>
            <div class="os-f">滚动驱动<em>SCROLL</em></div></div>
          <button class="gbtn soft" data-os-next>下一屏 ↓</button>
        </section>
        <section class="os-sec os-cta">
          <h4>准备好了吗</h4>
          <p>点右侧圆点或「回到第一屏」，再体验一轮完整叙事。</p>
          <button class="gbtn primary" data-os-top>回到第一屏 ↑</button>
        </section>
        <div class="os-dots">
          <button class="on" data-os-dot="0" aria-label="第 1 屏"></button>
          <button data-os-dot="1" aria-label="第 2 屏"></button>
          <button data-os-dot="2" aria-label="第 3 屏"></button></div>
      </div>
        <div class="loc-ov fp-ov" data-fp-ov>
          <div class="fp-player">
            <div class="fp-screen" data-fp-screen>
              <span class="fp-badge">DEMO REEL</span>
              <button class="fp-play" data-fp-toggle aria-label="播放/暂停">▶</button></div>
            <div class="fp-ctrl">
              <button data-fp-toggle aria-label="播放/暂停">▶</button>
              <div class="fp-bar"><i data-fp-fill></i></div>
              <span data-fp-time>0:00 / 0:30</span></div>
            <button class="fp-x" data-fp-close aria-label="关闭">✕</button></div></div>`,
      v: ['占满舞台的整屏画面：眉题、超大标题、副文、双按钮、底部下滑提示', '「观看演示」会拉起真实的局部播放器浮层'],
      m: ['各元素以级联延迟自下浮入', '点观看演示：播放器浮层展开，进度条真实推进、可播放/暂停', '「立即开始」原地经历加载→成功两态']
    },
    {
      n: '影视落地页', en: 'Cinema Landing', k: '海报背景 · 预告真播放',
      d: '电影/剧集宣传的整页画面：巨幅海报氛围、片名、档期与可播的预告入口。',
      h: `<div class="cinema">
        <div class="cin-bg"></div>
        <div class="cin-body">
          <span class="cin-tag">10 月 26 日 全国上映</span>
          <h3>液态纪元</h3>
          <p>一场关于界面与光的科幻史诗 · 4K HDR</p>
          <div class="cin-acts">
            <button class="gbtn primary" data-fpplay>▶ 播放预告</button>
            <button class="gbtn ghost" data-fxwant>＋ 想看</button></div></div>
        <div class="loc-ov fp-ov" data-fp-ov>
          <div class="fp-player">
            <div class="fp-screen" data-fp-screen>
              <span class="fp-badge">TEASER</span>
              <button class="fp-play" data-fp-toggle aria-label="播放/暂停">▶</button></div>
            <div class="fp-ctrl">
              <button data-fp-toggle aria-label="播放/暂停">▶</button>
              <div class="fp-bar"><i data-fp-fill></i></div>
              <span data-fp-time>0:00 / 0:30</span></div>
            <button class="fp-x" data-fp-close aria-label="关闭">✕</button></div></div></div>`,
      v: ['全幅渐变海报底 + 暗角，信息集中在下半部', '播放预告会拉起真实的局部播放器'],
      m: ['背景光缓慢漂移，像海报的动态版', '播放器进度真实推进，可暂停续播', '「想看」点击后原地变为已关注状态']
    },
    {
      n: '产品发布页', en: 'Product Launch', k: '大标题 · 双 CTA · 信任条',
      d: '新品发布的整屏段落：主张、产品意象、双 CTA 与信任背书。',
      h: `<div class="launch">
        <span class="lp-chip">NEW · v2.6</span>
        <h3>更快的栅格，<br>更稳的组件</h3>
        <div class="lp-art">
          <button class="lp-p on" data-lp-p="0" aria-label="基础版"><span></span></button>
          <button class="lp-p" data-lp-p="1" aria-label="专业版"><span></span></button>
          <button class="lp-p" data-lp-p="2" aria-label="旗舰版"><span></span></button></div>
        <div class="lp-sel"><b data-lp-name>基础版</b><span data-lp-desc>适合个人项目的组件集。</span></div>
        <div class="lp-acts">
          <button class="gbtn primary" data-fxok>免费开始</button>
          <button class="gbtn soft" data-toast data-msg="已打开发行说明（演示）">发行说明</button></div>
        <div class="lp-trust">已被 128 支团队采用 · ★ 4.9</div></div>`,
      v: ['中轴对称：版本徽标、双行大标题、抽象产品意象、双按钮、一行信任背书', '产品意象为三块错落的玻璃面板'],
      m: ['三块玻璃面板交错漂浮，像悬浮的产品截图', '标题逐词上浮入场', '信任条最后淡入']
    },
    {
      n: '数据大屏', en: 'Big-screen Dashboard', k: '深色大屏 · KPI 环列',
      d: '监控中心风格的数据大屏片段：环形指标 + 柱状趋势。',
      h: `<div class="bigsc">
        <div class="bs-top"><b>实时监控中心</b><span data-clock>--<i>:</i>--<i>:</i>--</span></div>
        <div class="bs-rings">
          <div class="ring" data-pct="78" style="width:92px;height:92px">
            <svg viewBox="0 0 120 120"><defs><linearGradient id="bsG1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#28c8e0"/><stop offset="1" stop-color="#6d7dff"/></linearGradient></defs>
            <circle class="rk-bg" cx="60" cy="60" r="50"/><circle class="rk-fg" cx="60" cy="60" r="50" style="stroke:url(#bsG1)"/></svg>
            <div class="rk-tx"><b>78<span style="font-size:11px">%</span></b></div></div>
          <div class="ring" data-pct="54" style="width:92px;height:92px">
            <svg viewBox="0 0 120 120"><circle class="rk-bg" cx="60" cy="60" r="50"/><circle class="rk-fg" cx="60" cy="60" r="50" style="stroke:#c44dff"/></svg>
            <div class="rk-tx"><b>54<span style="font-size:11px">%</span></b></div></div></div>
        <div class="bars" style="height:64px;margin-top:6px">
          <span class="bar"><i data-h="48"></i></span><span class="bar hi"><i data-h="92"></i></span>
          <span class="bar"><i data-h="66"></i></span><span class="bar"><i data-h="80"></i></span>
          <span class="bar"><i data-h="55"></i></span><span class="bar"><i data-h="70"></i></span>
          <span class="bar"><i data-h="88"></i></span></div></div>`,
      v: ['深色底、顶部标题+实时时钟，中部双环形指标，底部密排柱状', '指标环用青蓝与品红两套渐变区分'],
      m: ['环与柱沿用绘入/拔起入场', '时钟每秒走字', '适合 16:9 大屏与监控墙']
    },
    {
      n: '品牌墙', en: 'Logo Wall', k: '客户背书 · 等距灰度',
      d: '官网常见的客户/合作伙伴 Logo 墙。',
      h: `<div class="logow">
        <div class="lw-row">
          <span class="lw-i" data-lw>⬡ AURORA</span><span class="lw-i" data-lw>◈ LUMEN</span>
          <span class="lw-i" data-lw>⬢ NEXUS</span><span class="lw-i" data-lw>✦ ORBIT</span>
          <span class="lw-i" data-lw>◇ PULSE</span></div>
        <span class="lw-cap">受到这些团队的信任</span></div>`,
      v: ['一行等距排列的字标型 Logo（灰度弱化）', '下方一行小号说明'],
      m: ['悬停单个 Logo 点亮为强调色并轻微上浮', '入场时整排以级联淡入', 'Logo 保持等视觉重量，不抢主内容']
    },
    {
      n: '团队网格', en: 'Team Grid', k: '成员卡 · 网格陈列',
      d: 'About 页标配的团队成员卡片网格。',
      h: `<div class="teamg">
        <div class="tm-c" data-tm><span class="tm-av a1">林</span><b>林晓岸</b><span>设计负责人</span>
          <p class="tm-bio">10 年产品与设计系统经验，主导 Liquid Glass 体系。</p></div>
        <div class="tm-c" data-tm><span class="tm-av a3">周</span><b>周叙</b><span>前端负责人</span>
          <p class="tm-bio">负责动效实现与性能，维护虚拟列表与栅格。</p></div>
        <div class="tm-c" data-tm><span class="tm-av a4">陈</span><b>陈可</b><span>产品负责人</span>
          <p class="tm-bio">跟进需求与发布节奏，对齐各方预期。</p></div></div>`,
      v: ['三张等宽成员卡：圆形头像、姓名、角色', '头像用不同渐变区分'],
      m: ['悬停卡片上浮，头像放大', '入场逐卡级联落位']
    },
    {
      n: '终章行动区', en: 'Final CTA Band', k: '全宽收尾 · 单一出口',
      d: '页面最底部的全宽行动号召条，只留一个主出口。',
      h: `<div class="ctaband">
        <div class="cb-in">
          <h4>把这套组件装进你的下一个项目</h4>
          <p>200+ 组件、87 条术语、可复制的 AI 提示词，全部本地可用。</p>
          <div class="cb-sub"><input placeholder="you@company.com" aria-label="邮箱"><button class="gbtn primary" data-cb-sub>订阅更新</button></div></div></div>`,
      v: ['强调渐变铺底的全宽横条，文字与按钮居中', '只有一个主按钮，避免分心'],
      m: ['入场时自下方平推就位', '背景渐变缓慢流动', '按钮常规悬停反馈']
    },
    {
      n: '404 页', en: '404 Page', k: '整页状态 · 幽默出口',
      d: '找不到页面时的整页状态：大号编号、说明与返回出口。',
      h: `<div class="p404">
        <div class="er-num">4<i data-404-t>0</i>4</div>
        <h4>这一页跑去宇宙流浪了</h4>
        <p>你访问的地址不存在，或已被星尘带走。</p>
        <button class="gbtn primary" data-fpx="top">回到首页</button></div>`,
      v: ['整页居中：超大空心 404、标题、一行解释、单个返回按钮', '数字中的 0 用强调色点亮'],
      m: ['大号数字入场带弹跳落位', '可加轻微的漂浮起伏保持活性']
    },
    {
      n: '文章阅读版式', en: 'Article Layout', k: '目录正文 · 阅读栏宽',
      d: 'PC 内容站的文章页：左侧目录、中央正文、克制的行宽。',
      h: `<div class="artl" data-artl>
        <div class="al-toc">
          <b>目录</b>
          <button class="on" data-artl-to="0">引言</button>
          <button data-artl-to="1">设计原则</button>
          <button data-artl-to="2">动效参数</button>
          <button data-artl-to="3">总结</button></div>
        <div class="al-body" data-artl-body>
          <h4>引言</h4><p>阅读版式的核心是行长控制：中文每行 28–40 字最舒适，配合 1.75 左右的行高。</p>
          <h4>设计原则</h4><p>目录常驻左侧并随滚动高亮；正文区限制最大宽度，两侧留白就是呼吸感。</p>
          <h4>动效参数</h4><p>正文中的动效点到为止：入场一次、链接悬停、引用块淡入，仅此而已。</p>
          <h4>总结</h4><p>好文章的版式会消失在阅读里——你只记得内容，不记得边框。</p></div></div>`,
      v: ['左窄目录 + 右宽正文的两栏阅读布局', '标题层级清晰，段落间距宽松'],
      m: ['点击目录平滑滚动到对应小节', '目录选中态随点击迁移', '段落入场可接入滚动显现']
    },
    {
      n: '下载页', en: 'Download Page', k: '版本选择 · 系统按钮',
      d: '软件下载页的整段：版本说明 + 按系统的下载按钮。',
      h: `<div class="dlpg">
        <h4>Liquid Glass v2.6</h4>
        <p>发布于 2026-10-19 · 支持 Windows / macOS / 浏览器</p>
        <div class="dl-btns">
          <button class="gbtn primary" data-fxdl>⬇ Windows</button>
          <button class="gbtn soft" data-fxdl>⬇ macOS</button>
          <button class="gbtn ghost" data-toast data-msg="已打开 Web 版（演示）">⌘ Web 版</button></div>
        <span class="dl-sum">SHA-256: a3f9…c21e · 12.4 MB</span></div>`,
      v: ['居中的版本标题、日期与平台说明、三枚系统按钮、一行校验和', '按钮按平台分主次'],
      m: ['按钮常规悬停上浮', '校验和用等宽弱字色，体现可信']
    }
  ]
});
/* 整页场景排在术语图之前 */
{ const i = DATA.findIndex(c => c.id === 'fullpage'); const j = DATA.findIndex(c => c.id === 'anatomy'); if (i > -1 && j > -1 && i > j) { const d = DATA.splice(i, 1)[0]; DATA.splice(j, 0, d); } }

DATA.find(c => c.id === 'overlays').items.push({
  n: '聚光灯引导', en: 'Spotlight Tour', k: '遮罩开孔 · 分步指向',
  d: '产品引导的标准做法：压暗全页、在具体控件上开一个圆形聚光孔，配步骤卡片。也叫 Coach Marks / Guided Tour。',
  h: `<div style="display:flex;flex-direction:column;align-items:center;gap:14px;width:100%">
      <div class="spot-stage" data-spot>
        <div class="sp-mock">
          <span class="sp-t1" data-spot-t="0" title="设置">⚙</span>
          <button class="gbtn sm soft" data-spot-t="1">筛选条件</button>
          <button class="gbtn sm primary" data-spot-t="2">保存更改</button></div>
        <div class="spot-ring" data-spot-ring></div>
        <div class="spot-card" data-spot-card>
          <b data-spot-title></b>
          <p data-spot-desc></p>
          <div class="spot-btns">
            <span data-spot-idx>1 / 3</span>
            <button class="gbtn sm ghost" data-spot-skip>跳过</button>
            <button class="gbtn sm primary" data-spot-next>下一步</button></div></div></div>
      <button class="replay" data-spot-start>▶ 开始引导</button></div>`,
  v: ['一块迷你操作面板：设置图标、筛选钮、保存钮作为引导目标', '引导态：四周压暗，目标处一个亮圈开孔 + 一张步骤卡片'],
  m: ['开始后第一目标被聚光环套住，卡片说明该部位', '下一步依次指向筛选、保存；环与卡片平滑迁移', '最后一步按钮变为完成；跳过随时退出'],
  s: ['覆盖 未开始 / 聚焦第 n 步 / 完成 三种状态']
});
/*__DATA__*/