import { createElement as h, forwardRef } from 'react';

export const NibSuitcase = forwardRef(function NibSuitcase({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M9 7V4h6v3M7 7v13M17 7v13", fill: "none" })
  );
});

export default NibSuitcase;
