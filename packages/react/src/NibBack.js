import { createElement as h, forwardRef } from 'react';

export const NibBack = forwardRef(function NibBack({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "3", fill: "none" }),
    h('path', { d: "M16 12H8M11 9l-3 3 3 3", fill: "none" })
  );
});

export default NibBack;
