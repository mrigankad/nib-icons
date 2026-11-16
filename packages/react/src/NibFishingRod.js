import { createElement as h, forwardRef } from 'react';

export const NibFishingRod = forwardRef(function NibFishingRod({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21L20 3M20 3v14M20 17a2 2 0 1 1-2 2", fill: "none" }),
    h('circle', { cx: "7", cy: "17", r: "2", fill: "none" })
  );
});

export default NibFishingRod;
