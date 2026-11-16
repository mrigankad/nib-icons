import { createElement as h, forwardRef } from 'react';

export const NibClapperboard = forwardRef(function NibClapperboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "9", width: "18", height: "12", rx: "1.5", fill: "none" }),
    h('path', { d: "M3 9V7l16.5-4 .5 2.5L3.5 9.5M8 4.8l2.2 3.4M13 3.6l2.2 3.4", fill: "none" })
  );
});

export default NibClapperboard;
