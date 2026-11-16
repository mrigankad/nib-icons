import { createElement as h, forwardRef } from 'react';

export const NibPadlock = forwardRef(function NibPadlock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "10", width: "16", height: "11", rx: "4", fill: "none" }),
    h('path', { d: "M7.5 10V7a4.5 4.5 0 0 1 9 0v3M12 14.5V17", fill: "none" })
  );
});

export default NibPadlock;
