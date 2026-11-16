import { createElement as h, forwardRef } from 'react';

export const NibKnowledgeGraph = forwardRef(function NibKnowledgeGraph({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "2.5", fill: "none" }),
    h('circle', { cx: "4", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "20", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "4", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "20", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M5.5 6.5L10 10.5M18.5 6.5L14 10.5M5.5 17.5L10 13.5M18.5 17.5L14 13.5M6 5h12", fill: "none" })
  );
});

export default NibKnowledgeGraph;
