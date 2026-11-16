import { createElement as h, forwardRef } from 'react';

export const NibPaintCan = forwardRef(function NibPaintCan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "11", cy: "7", rx: "7", ry: "2.5", fill: "none" }),
    h('path', { d: "M4 7v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7M4 7c3-5 11-5 14 0M18 11c2 0 3 1 3 3v2", fill: "none" })
  );
});

export default NibPaintCan;
