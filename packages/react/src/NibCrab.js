import { createElement as h, forwardRef } from 'react';

export const NibCrab = forwardRef(function NibCrab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "14", rx: "6", ry: "4", fill: "none" }),
    h('path', { d: "M6 13L3 9M3 9a2 2 0 0 1 0-4l1 2 1-2a2 2 0 0 1-2 4zM18 13l3-4M21 9a2 2 0 0 0 0-4l-1 2-1-2a2 2 0 0 0 2 4zM7 17l-3 3M17 17l3 3M9 17.5L7 21M15 17.5l2 3.5M10 10V8M14 10V8", fill: "none" })
  );
});

export default NibCrab;
