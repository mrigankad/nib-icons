import { createElement as h, forwardRef } from 'react';

export const NibCarWash = forwardRef(function NibCarWash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 20v-4l2-4h14l2 4v4zM3 16h18M5 20v2M19 20v2M7 3c-1 1.5-1 2.5 0 3.5s1-2 0-3.5zM12 2c-1 1.5-1 2.5 0 3.5s1-2 0-3.5zM17 3c-1 1.5-1 2.5 0 3.5s1-2 0-3.5z", fill: "none" })
  );
});

export default NibCarWash;
