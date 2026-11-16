import { createElement as h, forwardRef } from 'react';

export const NibFund = forwardRef(function NibFund({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "5", rx: "7", ry: "2.5", fill: "none" }),
    h('path', { d: "M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5M5 10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5M5 14.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5", fill: "none" })
  );
});

export default NibFund;
