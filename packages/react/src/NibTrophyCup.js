import { createElement as h, forwardRef } from 'react';

export const NibTrophyCup = forwardRef(function NibTrophyCup({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3h12l-1 7a5 5 0 0 1-10 0zM12 15v3M8 21h8M8 18h8", fill: "none" })
  );
});

export default NibTrophyCup;
