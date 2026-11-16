import { createElement as h, forwardRef } from 'react';

export const NibXp = forwardRef(function NibXp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "3", fill: "none" }),
    h('path', { d: "M6 9.5l4 5M10 9.5l-4 5M13 14.5v-5h2.5a1.5 1.5 0 0 1 0 3H13", fill: "none" })
  );
});

export default NibXp;
