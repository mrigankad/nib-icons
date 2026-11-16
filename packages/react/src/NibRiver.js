import { createElement as h, forwardRef } from 'react';

export const NibRiver = forwardRef(function NibRiver({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2c0 4 5 4 5 8s-6 4-6 8v4M14 2c0 4 5 4 5 8s-6 4-6 8v4", fill: "none" })
  );
});

export default NibRiver;
