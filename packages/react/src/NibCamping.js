import { createElement as h, forwardRef } from 'react';

export const NibCamping = forwardRef(function NibCamping({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 20l7-12 7 12zM9 20v-5M2 20h20M19 20v-4M17 12l2-3 2 3-2 4z", fill: "none" })
  );
});

export default NibCamping;
