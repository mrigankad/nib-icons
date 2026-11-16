import { createElement as h, forwardRef } from 'react';

export const NibTie = forwardRef(function NibTie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 2h4l-1 4h-2zM11 6l-2 12 3 4 3-4-2-12", fill: "none" })
  );
});

export default NibTie;
