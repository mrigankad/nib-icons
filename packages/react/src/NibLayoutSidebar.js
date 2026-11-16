import { createElement as h, forwardRef } from 'react';

export const NibLayoutSidebar = forwardRef(function NibLayoutSidebar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M9 3v18M5.5 7.5h1M5.5 11h1M13 8h5M13 12h5", fill: "none" })
  );
});

export default NibLayoutSidebar;
