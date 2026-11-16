import { createElement as h, forwardRef } from 'react';

export const NibPlane = forwardRef(function NibPlane({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c1 0 1.5 1 1.5 2.5V9l8 5v2l-8-2.5V18l2.5 2v1.5L12 20.5l-4 1V20l2.5-2v-4.5L2.5 16v-2l8-5V4.5C10.5 3 11 2 12 2z", fill: "none" })
  );
});

export default NibPlane;
