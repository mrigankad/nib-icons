import { createElement as h, forwardRef } from 'react';

export const NibPaintRoller = forwardRef(function NibPaintRoller({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "15", height: "6", rx: "1.5", fill: "none" }),
    h('path', { d: "M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3", fill: "none" }),
    h('rect', { x: "10.5", y: "14", width: "3", height: "7", rx: "1", fill: "none" })
  );
});

export default NibPaintRoller;
