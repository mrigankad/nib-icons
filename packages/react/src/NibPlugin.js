import { createElement as h, forwardRef } from 'react';

export const NibPlugin = forwardRef(function NibPlugin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "8", width: "12", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M15 11h3a2 2 0 0 1 0 4h-3M7 8V5a2 2 0 0 1 4 0v3", fill: "none" })
  );
});

export default NibPlugin;
