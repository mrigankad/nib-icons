import { createElement as h, forwardRef } from 'react';

export const NibArtboard = forwardRef(function NibArtboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "7", width: "14", height: "14", rx: "1.5", fill: "none" }),
    h('path', { d: "M7 2v2.5M2 7h2.5M14 2v2.5M2 14h2.5", fill: "none" })
  );
});

export default NibArtboard;
