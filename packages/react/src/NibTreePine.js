import { createElement as h, forwardRef } from 'react';

export const NibTreePine = forwardRef(function NibTreePine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l-5 7h3l-5 6h4l-4 4h14l-4-4h4l-5-6h3zM12 19v3", fill: "none" })
  );
});

export default NibTreePine;
