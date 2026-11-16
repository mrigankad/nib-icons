import { createElement as h, forwardRef } from 'react';

export const NibChessPawn = forwardRef(function NibChessPawn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "3", fill: "none" }),
    h('path', { d: "M9 11h6M10 11c0 3-1 5-3 7h10c-2-2-3-4-3-7M6 21h12", fill: "none" })
  );
});

export default NibChessPawn;
