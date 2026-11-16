import { createElement as h, forwardRef } from 'react';

export const NibArrowsCross = forwardRef(function NibArrowsCross({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 19L19 5M13 5h6v6M5 5l14 14M19 13v6h-6", fill: "none" })
  );
});

export default NibArrowsCross;
