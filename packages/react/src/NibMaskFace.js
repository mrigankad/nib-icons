import { createElement as h, forwardRef } from 'react';

export const NibMaskFace = forwardRef(function NibMaskFace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M9 9h.01M15 9h.01M6.5 13L2.5 11.5M17.5 13l4-1.5M9 14.5h6", fill: "none" }),
    h('rect', { x: "6.5", y: "12", width: "11", height: "6", rx: "2", fill: "none" })
  );
});

export default NibMaskFace;
