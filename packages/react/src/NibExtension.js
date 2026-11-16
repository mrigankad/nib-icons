import { createElement as h, forwardRef } from 'react';

export const NibExtension = forwardRef(function NibExtension({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "8", height: "8", rx: "1.5", fill: "none" }),
    h('rect', { x: "13", y: "13", width: "8", height: "8", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "13", width: "8", height: "8", rx: "1.5", fill: "none" }),
    h('path', { d: "M17 4v6M14 7h6", fill: "none" })
  );
});

export default NibExtension;
