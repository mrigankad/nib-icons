import { createElement as h, forwardRef } from 'react';

export const NibMri = forwardRef(function NibMri({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "13", height: "14", rx: "6.5", fill: "none" }),
    h('ellipse', { cx: "8.5", cy: "11", rx: "3", ry: "4", fill: "none" }),
    h('path', { d: "M8.5 11H22M2 21h20M6 18v3M18 11v10", fill: "none" })
  );
});

export default NibMri;
