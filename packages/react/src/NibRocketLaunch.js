import { createElement as h, forwardRef } from 'react';

export const NibRocketLaunch = forwardRef(function NibRocketLaunch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M14.5 4.5C17 3 20 3 21 3c0 1 0 4-1.5 6.5L13 16l-5-5zM8 11H4l3-4h5M13 16v4l4-3v-5", fill: "none" })
  );
});

export default NibRocketLaunch;
