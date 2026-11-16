import { createElement as h, forwardRef } from 'react';

export const NibCardTap = forwardRef(function NibCardTap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "9", width: "14", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M2 13h14M18.5 6a5 5 0 0 1 0 7M21 3.5a8.5 8.5 0 0 1 0 12", fill: "none" })
  );
});

export default NibCardTap;
