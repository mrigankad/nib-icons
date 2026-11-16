import { createElement as h, forwardRef } from 'react';

export const NibDna = forwardRef(function NibDna({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 2c0 6 10 8 10 14v6M17 2c0 6-10 8-10 14v6M9 5h6M8 9h8M8 15h8M9 19h6", fill: "none" })
  );
});

export default NibDna;
