import { createElement as h, forwardRef } from 'react';

export const NibImages = forwardRef(function NibImages({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "3", width: "14", height: "14", rx: "2", fill: "none" }),
    h('circle', { cx: "11", cy: "7.5", r: "1", fill: "none" }),
    h('path', { d: "M21 13l-4-4-7.5 8M3 7v12a2 2 0 0 0 2 2h12", fill: "none" })
  );
});

export default NibImages;
