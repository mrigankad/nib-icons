import { createElement as h, forwardRef } from 'react';

export const NibAlignEnd = forwardRef(function NibAlignEnd({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 4v16", fill: "none" }),
    h('rect', { x: "5", y: "6.5", width: "13", height: "3.5", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "14", width: "8", height: "3.5", rx: "1", fill: "none" })
  );
});

export default NibAlignEnd;
