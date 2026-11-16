import { createElement as h, forwardRef } from 'react';

export const NibDress = forwardRef(function NibDress({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2v4l-1 4h8l-1-4V2M8 10l-4 12h16l-4-12M9 6h6", fill: "none" })
  );
});

export default NibDress;
