import { createElement as h, forwardRef } from 'react';

export const NibEReader = forwardRef(function NibEReader({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M8 6h8M8 9h8M8 12h5M11 18.5h2", fill: "none" })
  );
});

export default NibEReader;
