import { createElement as h, forwardRef } from 'react';

export const NibStorage = forwardRef(function NibStorage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "18", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "13", width: "18", height: "7", rx: "1.5", fill: "none" }),
    h('path', { d: "M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h3", fill: "none" })
  );
});

export default NibStorage;
