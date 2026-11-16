import { createElement as h, forwardRef } from 'react';

export const NibWhiteboard = forwardRef(function NibWhiteboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M6 21l2-5M18 21l-2-5M7 8h6M7 11h4M15 13h3", fill: "none" })
  );
});

export default NibWhiteboard;
