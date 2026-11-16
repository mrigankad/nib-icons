import { createElement as h, forwardRef } from 'react';

export const NibFullscreen = forwardRef(function NibFullscreen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3", fill: "none" }),
    h('rect', { x: "8", y: "8", width: "8", height: "8", rx: "1", fill: "none" })
  );
});

export default NibFullscreen;
