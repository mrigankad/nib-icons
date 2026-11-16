import { createElement as h, forwardRef } from 'react';

export const NibHdr = forwardRef(function NibHdr({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5 9.5v5M8 9.5v5M5 12h3M10.5 9.5v5h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zM15.5 14.5v-5H17a1.5 1.5 0 0 1 0 3h-1.5M17 12.5l1.5 2", fill: "none" })
  );
});

export default NibHdr;
