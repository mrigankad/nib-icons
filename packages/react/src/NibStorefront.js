import { createElement as h, forwardRef } from 'react';

export const NibStorefront = forwardRef(function NibStorefront({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18v4a2.3 2.3 0 0 1-4.5 0 2.3 2.3 0 0 1-4.5 0 2.3 2.3 0 0 1-4.5 0A2.3 2.3 0 0 1 3 8zM5 11v9h14v-9M14 20v-6h2v6", fill: "none" }),
    h('rect', { x: "7.5", y: "14", width: "3.5", height: "3", rx: ".5", fill: "none" })
  );
});

export default NibStorefront;
