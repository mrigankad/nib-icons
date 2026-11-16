import { createElement as h, forwardRef } from 'react';

export const NibDistributeHorizontal = forwardRef(function NibDistributeHorizontal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18M21 3v18", fill: "none" }),
    h('rect', { x: "9.5", y: "7", width: "5", height: "10", rx: "1", fill: "none" })
  );
});

export default NibDistributeHorizontal;
