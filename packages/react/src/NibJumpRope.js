import { createElement as h, forwardRef } from 'react';

export const NibJumpRope = forwardRef(function NibJumpRope({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "3", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "18", y: "3", width: "3", height: "7", rx: "1.5", fill: "none" }),
    h('path', { d: "M4.5 10c0 8 4 11 7.5 11s7.5-3 7.5-11", fill: "none" })
  );
});

export default NibJumpRope;
