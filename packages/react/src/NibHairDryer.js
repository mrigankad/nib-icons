import { createElement as h, forwardRef } from 'react';

export const NibHairDryer = forwardRef(function NibHairDryer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3a6 6 0 0 0 0 12h7l3-2V5l-3-2zM10 15l1 7h3l-1-7M19 6h3M19 9h3M19 12h3", fill: "none" }),
    h('circle', { cx: "9", cy: "9", r: "2", fill: "none" })
  );
});

export default NibHairDryer;
