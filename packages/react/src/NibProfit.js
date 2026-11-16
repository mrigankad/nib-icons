import { createElement as h, forwardRef } from 'react';

export const NibProfit = forwardRef(function NibProfit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "14", r: "6", fill: "none" }),
    h('path', { d: "M9 11v6M7 14h4M15 9l4-5 3 3M19 4v6", fill: "none" })
  );
});

export default NibProfit;
