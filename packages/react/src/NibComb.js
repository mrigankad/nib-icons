import { createElement as h, forwardRef } from 'react';

export const NibComb = forwardRef(function NibComb({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M4 11v6M7 11v6M10 11v6M13 11v6M16 11v6M19 11v6", fill: "none" })
  );
});

export default NibComb;
