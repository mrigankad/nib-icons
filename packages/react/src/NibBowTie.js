import { createElement as h, forwardRef } from 'react';

export const NibBowTie = forwardRef(function NibBowTie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 10L3 6v12l7-4zM14 10l7-4v12l-7-4z", fill: "none" }),
    h('rect', { x: "10", y: "9.5", width: "4", height: "5", rx: "1", fill: "none" })
  );
});

export default NibBowTie;
