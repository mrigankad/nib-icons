import { createElement as h, forwardRef } from 'react';

export const NibTabletPill = forwardRef(function NibTabletPill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "10", rx: "8", ry: "4", fill: "none" }),
    h('path', { d: "M4 10v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4M8 10h8", fill: "none" })
  );
});

export default NibTabletPill;
