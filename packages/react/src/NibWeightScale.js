import { createElement as h, forwardRef } from 'react';

export const NibWeightScale = forwardRef(function NibWeightScale({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "4", fill: "none" }),
    h('path', { d: "M8 9a4 4 0 0 1 8 0zM12 9l1.5-2", fill: "none" })
  );
});

export default NibWeightScale;
