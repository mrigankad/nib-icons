import { createElement as h, forwardRef } from 'react';

export const NibTextColor = forwardRef(function NibTextColor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6.5 15L12 3l5.5 12M8.5 11h7", fill: "none" }),
    h('rect', { x: "3", y: "18", width: "18", height: "3", rx: "1", fill: "none" })
  );
});

export default NibTextColor;
