import { createElement as h, forwardRef } from 'react';

export const NibSpray = forwardRef(function NibSpray({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "9", width: "8", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M6 9V6h4v3M8 6V4h4M15.5 5h.01M18.5 3h.01M18.5 7h.01M21.5 5h.01M21.5 9h.01", fill: "none" })
  );
});

export default NibSpray;
