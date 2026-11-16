import { createElement as h, forwardRef } from 'react';

export const NibGallery = forwardRef(function NibGallery({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M3 13l5-4 5 4 3-2 5 4M5 20h2M11 20h2M17 20h2", fill: "none" })
  );
});

export default NibGallery;
