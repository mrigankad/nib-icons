import { createElement as h, forwardRef } from 'react';

export const NibPanorama = forwardRef(function NibPanorama({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 6c6 1.5 14 1.5 20 0v12c-6-1.5-14-1.5-20 0zM6 14l3-3 3 3 2-2 3 3", fill: "none" })
  );
});

export default NibPanorama;
