import { createElement as h, forwardRef } from 'react';

export const NibPoliceCar = forwardRef(function NibPoliceCar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 20v-5l2-5h14l2 5v5zM3 15h18M5 20v2M19 20v2M10 7h4V5h-4zM8 5l-2-1M16 5l2-1", fill: "none" })
  );
});

export default NibPoliceCar;
