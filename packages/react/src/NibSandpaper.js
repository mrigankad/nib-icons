import { createElement as h, forwardRef } from 'react';

export const NibSandpaper = forwardRef(function NibSandpaper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "14", rx: "1", fill: "none" }),
    h('path', { d: "M7 9h.01M11 9h.01M15 9h.01M9 12h.01M13 12h.01M17 12h.01M7 15h.01M11 15h.01M15 15h.01", fill: "none" })
  );
});

export default NibSandpaper;
