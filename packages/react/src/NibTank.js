import { createElement as h, forwardRef } from 'react';

export const NibTank = forwardRef(function NibTank({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "5", rx: "8", ry: "2.5", fill: "none" }),
    h('path', { d: "M4 5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5M20 9h2v6h-2M4 12h16", fill: "none" })
  );
});

export default NibTank;
