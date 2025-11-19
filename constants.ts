import { EraType, TimelineEvent } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1998-2005",
    title: "上古切图仔时代",
    description: "那是属于 Dreamweaver 和 Table 布局的蛮荒时代。我们用 PS 切图，为了 IE6 的 1px 间距 bug 熬通宵。当时我们以为这就是高科技 🤡。",
    type: EraType.STONE_AGE,
    sarcasticComment: "听说你还在用 spacer.gif 占位？笑死 😅",
    icon: "🦕"
  },
  {
    year: "2006-2012",
    title: "jQuery 一把梭",
    description: "万物皆可 `$(document).ready()`。回调地狱 (Callback Hell) 像拉面一样长。这时候的你觉得自己是‘前端工程师’，其实只是个写特效的 😅。",
    type: EraType.JQUERY_ERA,
    sarcasticComment: "你的代码像那一碗宽面，又长又宽 🍜",
    icon: "🍝"
  },
  {
    year: "2013-2018",
    title: "Webpack 配置工程师",
    description: "Angular, React, Vue 三国杀。我们不再写代码，我们每天都在调 Webpack 配置。`node_modules` 比黑洞还重。Left-pad 事件教会了我们什么叫脆弱 🤡。",
    type: EraType.FRAMEWORK_WARS,
    sarcasticComment: "恭喜，你的 'Hello World' 项目体积达到了 450MB 👏",
    icon: "☢️"
  },
  {
    year: "2019-2024",
    title: "过度封装的屎山",
    description: "Server Components, Hydration, Signals, Hooks... 我们发明了无数新名词来解决我们自己制造的问题。35岁的前端还没学会 Rust 就要被淘汰了 🥵。",
    type: EraType.COMPLEXITY_HELL,
    sarcasticComment: "useEffect 的依赖项比你的人生规划还乱 😅",
    icon: "😵‍💫"
  },
  {
    year: "2025",
    title: "Gemini 3: 降维打击",
    description: "Gemini 3 只需要你在餐巾纸上画个圈，就能生成整个 SaaS 平台。前端已死，有事烧纸。现在我们统称：提示词填空专员。",
    type: EraType.THE_END,
    sarcasticComment: "你那十年的 CSS 居中经验，现在一文不值 💀",
    icon: "⚰️"
  }
];