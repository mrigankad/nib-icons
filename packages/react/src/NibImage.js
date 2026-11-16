import { createElement as h, forwardRef } from 'react';

export const NibImage = forwardRef(function NibImage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('circle', { cx: "8.5", cy: "8.5", r: "1.5", fill: "none" }),
    h('path', { d: "M21 15l-5-5L5 21", fill: "none" })
  );
});

export default NibImage;
