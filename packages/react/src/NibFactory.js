import { createElement as h, forwardRef } from 'react';

export const NibFactory = forwardRef(function NibFactory({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21V10l6 4v-4l6 4v-4l6 4V3h2v18zM6 17h2M11 17h2M16 17h2", fill: "none" })
  );
});

export default NibFactory;
