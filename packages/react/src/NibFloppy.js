import { createElement as h, forwardRef } from 'react';

export const NibFloppy = forwardRef(function NibFloppy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M7 3v6h9V3M13.5 5v2M7 21v-7h10v7M9.5 17.5h5", fill: "none" })
  );
});

export default NibFloppy;
