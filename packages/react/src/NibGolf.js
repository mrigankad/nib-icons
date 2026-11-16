import { createElement as h, forwardRef } from 'react';

export const NibGolf = forwardRef(function NibGolf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 18V2l7 3.5-7 3.5", fill: "none" }),
    h('ellipse', { cx: "10", cy: "19", rx: "7", ry: "2.5", fill: "none" })
  );
});

export default NibGolf;
