import { createElement as h, forwardRef } from 'react';

export const NibBulldozer = forwardRef(function NibBulldozer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "16", width: "14", height: "5", rx: "2.5", fill: "none" }),
    h('path', { d: "M4 16v-5h4V6h5v10M16 13h3l2 2v6h-3M16 13v3", fill: "none" })
  );
});

export default NibBulldozer;
