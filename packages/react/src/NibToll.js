import { createElement as h, forwardRef } from 'react';

export const NibToll = forwardRef(function NibToll({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21V6h6v15M2 21h20M8 10h14M11 10v1.5M14 10v1.5M17 10v1.5M20 10v1.5M4 9h2", fill: "none" }),
    h('circle', { cx: "5", cy: "15", r: "1.2", fill: "none" })
  );
});

export default NibToll;
