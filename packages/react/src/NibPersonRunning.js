import { createElement as h, forwardRef } from 'react';

export const NibPersonRunning = forwardRef(function NibPersonRunning({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "16", cy: "4.5", r: "2.2", fill: "none" }),
    h('path', { d: "M15 8l-3.5 6", fill: "none" }),
    h('path', { d: "M14.5 9.5l4 .5 1-2.5", fill: "none" }),
    h('path', { d: "M14 10L10 8.5 8 10.5", fill: "none" }),
    h('path', { d: "M11.5 14l4 1.5-1 4.5", fill: "none" }),
    h('path', { d: "M11.5 14L8.5 17 5 16.5", fill: "none" }),
    h('path', { d: "M3 8.5h3M2.5 12h2.5", fill: "none" })
  );
});

export default NibPersonRunning;
