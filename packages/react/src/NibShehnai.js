import { createElement as h, forwardRef } from 'react';

export const NibShehnai = forwardRef(function NibShehnai({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3.500 15.200 13.700M3.500 5 13.700 15.200M3.500 5 5 3.500", fill: "none" }),
    h('ellipse', { cx: "17", cy: "17", rx: "4.800", ry: "2.200", transform: "rotate(45 17 17)", fill: "none" }),
    h('path', { d: "M8 8l1 1M10.500 10.500l1 1", fill: "none" })
  );
});

export default NibShehnai;
