import { createElement as h, forwardRef } from 'react';

export const NibStocks = forwardRef(function NibStocks({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17l5-5 4 3 9-9M3 21h18M16 6h5v5", fill: "none" })
  );
});

export default NibStocks;
