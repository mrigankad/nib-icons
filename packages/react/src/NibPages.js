import { createElement as h, forwardRef } from 'react';

export const NibPages = forwardRef(function NibPages({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2.5", y: "5", width: "9.5", height: "14", rx: "1.5", fill: "none" }),
    h('rect', { x: "12", y: "5", width: "9.5", height: "14", rx: "1.5", fill: "none" }),
    h('path', { d: "M5 9h4.5M5 12h4.5M14.5 9h4.5M14.5 12h4.5", fill: "none" })
  );
});

export default NibPages;
