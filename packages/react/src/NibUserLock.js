import { createElement as h, forwardRef } from 'react';

export const NibUserLock = forwardRef(function NibUserLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M3 20a7 7 0 0 1 9.5-6.5M16.5 16v-1.5a1.5 1.5 0 0 1 3 0V16", fill: "none" }),
    h('rect', { x: "15", y: "16", width: "6", height: "5", rx: "1", fill: "none" })
  );
});

export default NibUserLock;
