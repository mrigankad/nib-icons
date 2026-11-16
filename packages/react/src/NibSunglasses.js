import { createElement as h, forwardRef } from 'react';

export const NibSunglasses = forwardRef(function NibSunglasses({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 10h8v3a3.5 3.5 0 0 1-7 0zM14 10h8v3a3.5 3.5 0 0 1-7 0zM10 11h4M2 10V8M22 10V8", fill: "currentColor" })
  );
});

export default NibSunglasses;
