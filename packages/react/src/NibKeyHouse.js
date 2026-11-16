import { createElement as h, forwardRef } from 'react';

export const NibKeyHouse = forwardRef(function NibKeyHouse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9l6-5 6 5v7H3zM9 16v-3", fill: "none" }),
    h('circle', { cx: "17", cy: "15", r: "3", fill: "none" }),
    h('path', { d: "M17 18v4M17 20h2", fill: "none" })
  );
});

export default NibKeyHouse;
