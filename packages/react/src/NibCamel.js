import { createElement as h, forwardRef } from 'react';

export const NibCamel = forwardRef(function NibCamel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 7l2-2 2 1v6c0 2 1 3 3 3h9c2 0 3-1 3-3 0-3-1-5-3-5s-2 2-3.5 2S12 7 10 7s-2 3-4 3M8 15v6M11 15v6M16 15v6M19 14v7M21 12l1 3", fill: "none" })
  );
});

export default NibCamel;
