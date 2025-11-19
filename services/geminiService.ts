// 辞职信模板库
const resignationTemplates: Record<string, string[]> = {
  React: [
    `# 辞职信

尊敬的领导：

学了 10 年 React，天天跟 useEffect 依赖数组斗智斗斗智。结果 AI 3 毫秒就写完了我一周的活，还顺手优化了渲染性能 😅

我觉得我更适合送外卖，至少外卖不会因为少写个依赖项就无限重渲染 🤡

明天开始跑美团，记得给五星好评。

此致
敬礼

一个被 Virtual DOM 榨干的打工人 🥵`,

    `# 再见了，React

各位领导：

十年 React 开发，从 class 组件卷到 hooks，从 Redux 卷到 Zustand。

现在 AI 三秒钟干完我三天的活，我人麻了 😅

准备回老家养猪了，至少猪不会报"Cannot read property of undefined" 🤡

祝公司早日实现 AI 自动化，我先去研究怎么给猪圈做性能优化了。`,

    `# 离职申请

领导您好：

我用 useState 管理了十年的状态，现在我的精神状态也该管管了 🥵

AI 写组件比我快，优化比我好，还不需要摸鱼，我还留着干啥？

决定转行开滴滴，反正都是处理异步回调，开车至少不会栈溢出 😅

望批准！`
  ],

  Vue: [
    `# 辞职信

尊敬的领导：

十年 Vue 开发，从 Options API 卷到 Composition API，响应式都快把我整抑郁了 🥵

现在 AI 几秒钟就写完了，连 v-if 和 v-show 都比我用得溜 😅

我决定去奶茶店了，反正都是 watch 和 computed，奶茶至少能喝 🤡

此致
敬礼`,

    `# 再也不 watch 了

各位领导：

Vue 2 到 Vue 3 的迁移折磨了我整整三年，现在 AI 十秒钟就能全部重构 😅

我的心态已经 reactive 崩溃了，决定摆摊卖煎饼 🤡

至少煎饼不需要 setup()，翻个面就行。

望批准！🥵`,

    `# 离职报告

领导好：

当了十年 Vue 程序员，现在连 AI 都会用 Pinia 了，我还有啥存在价值？

准备去送外卖，反正都是路由跳转，外卖至少有配送费 😅

this.$destroy() 了，各位保重 🤡`
  ],

  Angular: [
    `# 辞职信

尊敬的领导：

十年 Angular，天天写依赖注入写到头秃 🥵

现在 AI 连 RxJS 的 pipe 都比我玩得 6，我真是小丑 🤡

决定去工地搬砖，至少搬砖不需要理解 Zone.js 😅

此致
敬礼`,

    `# 告别 TypeScript

各位领导：

Angular 开发十年，从 AngularJS 一路卷到 Angular 17。

现在 AI 写 Decorator 比我快，处理异步比我溜，我已经失去生存意义了 😅

准备去健身房当教练，反正都是注入依赖（蛋白粉）🤡

望批准！`,

    `# 离职申请

领导您好：

写了十年的 @Injectable()，现在我只想 @GoHome() 🥵

AI 三秒钟搞定的组件，我要调三天的依赖注入 😅

决定去开网约车，至少不用理解 Observable 的 N 种操作符 🤡

此致！`
  ],

  Svelte: [
    `# 辞职信

尊敬的领导：

我选择 Svelte 就是因为它简单，结果现在 AI 比我还简单 😅

十年编译优化的经验，被 AI 三秒钟碾压 🤡

准备去卖烧烤了，至少烧烤是真实存在的，不像 Virtual DOM 🥵

此致
敬礼`,

    `# 再也不编译了

各位领导：

Svelte 没有 Virtual DOM，但我的虚拟人生被 AI 摧毁了 😅

决定回老家开小卖部，reactive 个锤子，我要 cash flow 🤡

各位保重，有空来我店里买包烟 🥵`,

    `# 离职报告

领导好：

我用 Svelte 追求极致性能，结果 AI 性能比我高一万倍 😅

心态崩了，准备去送快递，反正都是 two-way binding（收件+派件）🤡

望批准！`
  ],

  jQuery: [
    `# 辞职信（用 IE6 浏览器打开）

尊敬的领导：

我用 jQuery 写了十年的 $，现在只想 $ 滚蛋 💸😅

AI 直接用原生 JS 秒了我所有代码，我这个上古切图仔已经没用了 🤡

决定去天桥贴膜，至少手机贴膜不需要兼容 IE8 🥵

此致
敬礼

一个被时代抛弃的 $(document).ready() 遗老`,

    `# jQuery 老兵不死，只是逐渐凋零

各位领导：

从 jQuery 1.0 用到现在，见证了前端的变迁 😅

现在连 AI 都懒得用 jQuery 了，我还坚持个锤子 🤡

准备去摆摊修手机，反正都是选择器（选客户）💸

望批准，此致！`,

    `# 离职申请

领导您好：

十年 $('.element')，现在我只想 $('.exit') 🥵

AI 用现代框架三秒搞定，我还在那 $.ajax() 呢 😅

决定转行开滴滴，反正都是 callback hell（堵车地狱）🤡

此致！`
  ]
};

// 职业转型建议库
const careerPivotOptions = [
  {
    title: "美团驻区域首席物流官",
    reason: "精通异步并发处理 (Promise.all)，擅长最优路径算法 (Routing)，还能忍受无限的需求变更（改地址）。",
    sarcasm: "以前 npm run build 等三分钟，现在等红灯也就一分钟，效率up！💸"
  },
  {
    title: "抖音生态视觉内容工程师",
    reason: "十年 CSS 居中经验，擅长响应式布局（横屏竖屏随便来），精通帧率优化（60fps 起步）。",
    sarcasm: "拍视频比写代码简单，至少不会报 undefined 🎬"
  },
  {
    title: "星巴克用户体验交付专家",
    reason: "习惯了处理客户的奇葩需求（产品经理），沟通能力 MAX，还擅长 JSON 配方管理（奶茶配方）。",
    sarcasm: "git merge 珍珠 + 椰果，冲突了直接重做，比解 merge conflict 简单 🧋"
  },
  {
    title: "滴滴出行移动终端操作员",
    reason: "天天处理回调地狱 (callback hell)，现在只需要处理真实的交通地狱，还擅长事件监听（听导航）。",
    sarcasm: "async/await 接单，Promise.race 抢单，技能完美迁移 🚗"
  },
  {
    title: "B站知识区UP主",
    reason: "写了十年技术文档，骂产品经理的话术炉火纯青，现在终于能公开输出了。",
    sarcasm: "标题：《震惊！前端十年经验竟然不如 AI 三秒钟？》播放量 100w+ 📹"
  },
  {
    title: "淘宝金牌客户关怀师",
    reason: "长期与测试撕逼锻炼出的沟通技巧，擅长把 Bug 说成 Feature，话术满级。",
    sarcasm: "亲亲，这个 Bug 是特性哦，送您优惠券~ 比改 Bug 轻松多了 ❤️"
  },
  {
    title: "威尔士健身私教顾问",
    reason: "996 搬砖练出的体格，深知打工人的痛苦，现在教别人如何对抗 ICU (I See You 加班)。",
    sarcasm: "以前 Ctrl+C/V，现在卧推深蹲，至少肌肉不会 deprecated 💪"
  },
  {
    title: "早餐摊位高并发系统架构师",
    reason: "精通多线程操作（同时摊三个煎饼），熟悉队列管理（排队系统），擅长流式处理（摊饼流程）。",
    sarcasm: "早高峰 QPS 直接拉满，redis 都没这么快 🥞"
  },
  {
    title: "小区安保访问控制工程师",
    reason: "写代码守护系统安全，现在守护小区大门，本质上都是权限管理 (RBAC)。",
    sarcasm: "403 Forbidden：业主请刷卡，快递请登记。比配 Nginx 简单 🛡️"
  },
  {
    title: "城乡结合部养殖产业负责人",
    reason: "十年 Debug 经验，擅长追踪和定位问题（猪跑了），精通生命周期管理（养猪全流程）。",
    sarcasm: "至少猪不会说'这个需求很简单，改一下就行'🐷"
  }
];

export const generateResignationLetter = async (framework: string): Promise<string> => {
  // 模拟加载延迟
  await new Promise(resolve => setTimeout(resolve, 800));

  const templates = resignationTemplates[framework] || resignationTemplates.React;
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];

  return randomTemplate;
};

export const generateCareerPivot = async (): Promise<string> => {
  // 模拟加载延迟
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 随机选择 3 个不重复的职业
  const shuffled = [...careerPivotOptions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  return JSON.stringify(selected);
};
