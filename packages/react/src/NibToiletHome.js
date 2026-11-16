import { createElement as h, forwardRef } from 'react';

export const NibToiletHome = forwardRef(function NibToiletHome({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h6v8H5zM4 11h16a8 6 0 0 1-8 6 8 6 0 0 1-8-6zM8 16l-1 5h10l-1-5", fill: "none" })
  );
});

export default NibToiletHome;
