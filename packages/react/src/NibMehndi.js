import { createElement as h, forwardRef } from 'react';

export const NibMehndi = forwardRef(function NibMehndi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "15", cy: "9", rx: "4.500", ry: "2", transform: "rotate(45 15 9)", fill: "none" }),
    h('path', { d: "M3.500 20.500 11.800 5.800M3.500 20.500 18.200 12.200", fill: "none" }),
    h('path', { d: "M7.500 15.500c1.500 0 1.500-1.800 3-1.800", fill: "none" })
  );
});

export default NibMehndi;
