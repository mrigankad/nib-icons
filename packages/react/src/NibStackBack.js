import { createElement as h, forwardRef } from 'react';

export const NibStackBack = forwardRef(function NibStackBack({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "8", y: "8", width: "13", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M16 4H5a2 2 0 0 0-2 2v11", fill: "none" })
  );
});

export default NibStackBack;
