import { createElement as h, forwardRef } from 'react';

export const NibRuler = forwardRef(function NibRuler({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17L17 3l4 4L7 21zM7 13l1.5 1.5M10 10l2 2M13 7l1.5 1.5", fill: "none" })
  );
});

export default NibRuler;
