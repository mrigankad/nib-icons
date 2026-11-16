import { createElement as h, forwardRef } from 'react';

export const NibDeselect = forwardRef(function NibDeselect({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none", strokeDasharray: "2.5 3" }),
    h('path', { d: "M9 9l6 6M15 9l-6 6", fill: "none" })
  );
});

export default NibDeselect;
