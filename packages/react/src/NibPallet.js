import { createElement as h, forwardRef } from 'react';

export const NibPallet = forwardRef(function NibPallet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 15h20v3H2zM2 21h20M4 18v3M12 18v3M20 18v3", fill: "none" }),
    h('rect', { x: "5", y: "6", width: "6", height: "9", fill: "none" }),
    h('rect', { x: "13", y: "9", width: "6", height: "6", fill: "none" })
  );
});

export default NibPallet;
