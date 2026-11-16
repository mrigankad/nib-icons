import { createElement as h, forwardRef } from 'react';

export const NibPath = forwardRef(function NibPath({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 18c2-8 5-9 7-6s5 2 7-6", fill: "none" }),
    h('circle', { cx: "4.5", cy: "19.5", r: "1.5", fill: "none" }),
    h('circle', { cx: "19.5", cy: "4.5", r: "1.5", fill: "none" })
  );
});

export default NibPath;
