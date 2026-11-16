import { createElement as h, forwardRef } from 'react';

export const NibCandy = forwardRef(function NibCandy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "12", rx: "5", ry: "4", fill: "none" }),
    h('path', { d: "M7 12L2 8v8zM17 12l5-4v8zM10 9l-1 6M14 9l-1 6", fill: "none" })
  );
});

export default NibCandy;
