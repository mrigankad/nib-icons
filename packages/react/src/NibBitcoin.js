import { createElement as h, forwardRef } from 'react';

export const NibBitcoin = forwardRef(function NibBitcoin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 5.5h7.5a3.2 3.2 0 0 1 0 6.5H7h8.5a3.2 3.2 0 0 1 0 6.5H7M9 5.5v13M10 3v2.5M13 3v2.5M10 18.5V21M13 18.5V21", fill: "none" })
  );
});

export default NibBitcoin;
