import { createElement as h, forwardRef } from 'react';

export const NibDishwasher = forwardRef(function NibDishwasher({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "18", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M3 7h18M6 4.5h6M9 13a3 3 0 0 0 0 6M14 11v8M17 11v8", fill: "none" })
  );
});

export default NibDishwasher;
