import { EraType, TimelineEvent } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1998-2005",
    title: "The Dark Ages of Tables",
    description: "Layouts were nested `<table>`s 15 layers deep. We sliced JPEGs in Photoshop and prayed to the gods of Internet Explorer 6. Accessibility was a myth. Semantics didn't exist.",
    type: EraType.STONE_AGE,
    sarcasticComment: "You used spacer.gif to fix a 1px margin bug. You are a war criminal.",
    icon: "🦕"
  },
  {
    year: "2006-2012",
    title: "jQuery & The Spaghetti Incident",
    description: "Everything was `$(document).ready()`. We created 'animations' by chaining 50 callbacks. The logic was scattered across 2000 lines of unmaintainable script tags inside HTML files.",
    type: EraType.JQUERY_ERA,
    sarcasticComment: "Undefined is not a function. But your sadness is defined.",
    icon: "🍝"
  },
  {
    year: "2013-2018",
    title: "The Great Configuration Wars",
    description: "Angular 1 vs React vs Vue. We stopped writing code and started configuring Webpack. `node_modules` became heavier than a black hole. 'left-pad' broke the entire internet for a day.",
    type: EraType.FRAMEWORK_WARS,
    sarcasticComment: "Congratulations, your 'Hello World' app is now 450MB.",
    icon: "☢️"
  },
  {
    year: "2019-2024",
    title: "The Hydration Hallucination",
    description: "Server Components, Islands Architecture, Signals, Suspense. We invented problems just to solve them with more complex abstractions. 'Fullstack' just meant you had to debug SQL errors too.",
    type: EraType.COMPLEXITY_HELL,
    sarcasticComment: "useEffect has missing dependencies. It's your sanity.",
    icon: "😵‍💫"
  },
  {
    year: "2025",
    title: "Gemini 3: The Rapture",
    description: "Gemini 3 creates entire SaaS platforms from a napkin sketch. It centers divs instantly. It optimizes images by telepathy. Frontend Engineers are reclassified as 'Prompt Archaeologists'.",
    type: EraType.THE_END,
    sarcasticComment: "Your 10,000 hours of CSS expertise are now worth less than a sandwich.",
    icon: "💀"
  }
];