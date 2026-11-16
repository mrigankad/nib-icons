import { createElement as h, forwardRef } from 'react';

export const NibRaw = forwardRef(function NibRaw({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5 14.5v-5h1.5a1.5 1.5 0 0 1 0 3H5M6.5 12.5l1.5 2M9.5 14.5l1.5-5 1.5 5M10 13h2M14 9.5l1 5 1-3 1 3 1-5", fill: "none" })
  );
});

export default NibRaw;
