import { createElement as h, forwardRef } from 'react';

export const NibDhol = forwardRef(function NibDhol({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "4", cy: "12", rx: "2", ry: "6", fill: "none" }),
    h('ellipse', { cx: "20", cy: "12", rx: "2", ry: "6", fill: "none" }),
    h('path', { d: "M4 6h16M4 18h16M6 6l4 12M10 6l4 12M14 6l4 12", fill: "none" })
  );
});

export default NibDhol;
