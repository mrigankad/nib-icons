import { createElement as h, forwardRef } from 'react';

export const NibBacteria = forwardRef(function NibBacteria({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "8", width: "16", height: "8", rx: "4", transform: "rotate(-30 12 12)", fill: "none" }),
    h('path', { d: "M9 11h.01M13 13h.01M15 9h.01M4 18l-2 2M20 6l2-2M7 4l-1-2M17 20l1 2", fill: "none" })
  );
});

export default NibBacteria;
