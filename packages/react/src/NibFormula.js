import { createElement as h, forwardRef } from 'react';

export const NibFormula = forwardRef(function NibFormula({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 4H8a2 2 0 0 0-2 2v12a2 2 0 0 1-2 2M4 10h7M14 10l6 8M20 10l-6 8", fill: "none" })
  );
});

export default NibFormula;
