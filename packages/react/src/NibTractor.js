import { createElement as h, forwardRef } from 'react';

export const NibTractor = forwardRef(function NibTractor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "16", r: "4.5", fill: "none" }),
    h('circle', { cx: "19", cy: "18", r: "2.5", fill: "none" }),
    h('path', { d: "M4 11V4h7l2 6h6l2 3v5M11 4v6M16 10V6", fill: "none" })
  );
});

export default NibTractor;
