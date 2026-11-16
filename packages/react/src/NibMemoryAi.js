import { createElement as h, forwardRef } from 'react';

export const NibMemoryAi = forwardRef(function NibMemoryAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "7", width: "18", height: "10", rx: "1", fill: "none" }),
    h('path', { d: "M7 7V4M11 7V4M15 7V4M19 7V4M7 17v3M17 17v3M8 11h3v2H8zM14 11h2v2h-2z", fill: "none" })
  );
});

export default NibMemoryAi;
