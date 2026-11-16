import { createElement as h, forwardRef } from 'react';

export const NibArcade = forwardRef(function NibArcade({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 2h12v8l2 3v9H4v-9l2-3z", fill: "none" }),
    h('rect', { x: "8", y: "4", width: "8", height: "5", rx: "1", fill: "none" }),
    h('path', { d: "M4 13h16M9 16v3M7.5 17.5h3M14 17h.01M16 16h.01", fill: "none" })
  );
});

export default NibArcade;
