import { createElement as h, forwardRef } from 'react';

export const NibAnalytics = forwardRef(function NibAnalytics({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M7 16v-3M11 16V8M15 16v-5M19 16v0", fill: "none" })
  );
});

export default NibAnalytics;
