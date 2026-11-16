import { createElement as h, forwardRef } from 'react';

export const NibSatelliteDish = forwardRef(function NibSatelliteDish({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9a11 11 0 0 0 11 11zM9.5 14.5L14 10M8 18l-2 3h6", fill: "none" }),
    h('circle', { cx: "15", cy: "9", r: "1.5", fill: "none" }),
    h('path', { d: "M17 3a4 4 0 0 1 4 4M17 6a1 1 0 0 1 1 1", fill: "none" })
  );
});

export default NibSatelliteDish;
