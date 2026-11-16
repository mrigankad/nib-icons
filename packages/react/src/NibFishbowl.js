import { createElement as h, forwardRef } from 'react';

export const NibFishbowl = forwardRef(function NibFishbowl({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4h10M8 4a9 9 0 1 0 8 0M4 11h16M9 15c1.5-2 4-2 5.5 0-1.5 2-4 2-5.5 0zM14.5 15l1.5-1v2z", fill: "none" })
  );
});

export default NibFishbowl;
