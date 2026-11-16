import { createElement as h, forwardRef } from 'react';

export const NibNewBadge = forwardRef(function NibNewBadge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "5", fill: "none" }),
    h('path', { d: "M6.5 14.5v-5l3.5 5v-5M16.5 9.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z", fill: "none" })
  );
});

export default NibNewBadge;
