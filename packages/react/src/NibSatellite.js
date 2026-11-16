import { createElement as h, forwardRef } from 'react';

export const NibSatellite = forwardRef(function NibSatellite({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9.5 9.5l3-3 5 5-3 3zM7.5 11.5L3 7l2.5-2.5L10 9M16.5 12.5L21 17l-2.5 2.5L14 15M3 21a5 5 0 0 0 5-5M3 17.5A1.5 1.5 0 0 0 4.5 16", fill: "none" })
  );
});

export default NibSatellite;
