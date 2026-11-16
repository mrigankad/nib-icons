import { createElement as h, forwardRef } from 'react';

export const NibCar = forwardRef(function NibCar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17v-5l2-5h14l2 5v5zM3 12h18M5 17v3h2v-3M17 17v3h2v-3M7 14.5h.01M17 14.5h.01", fill: "none" })
  );
});

export default NibCar;
