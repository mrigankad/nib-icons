import { createElement as h, forwardRef } from 'react';

export const NibMarkdown = forwardRef(function NibMarkdown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5.5 15V9l3 3.5 3-3.5v6M17 9v6M14.5 12.5L17 15l2.5-2.5", fill: "none" })
  );
});

export default NibMarkdown;
