import { createElement as h, forwardRef } from 'react';

export const NibTwoFactor = forwardRef(function NibTwoFactor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "11", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M7.5 18.5h2M15.5 12l2.5 2.5 4-4.5", fill: "none" })
  );
});

export default NibTwoFactor;
