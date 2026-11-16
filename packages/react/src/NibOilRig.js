import { createElement as h, forwardRef } from 'react';

export const NibOilRig = forwardRef(function NibOilRig({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2L7 18M12 2l5 16M8.5 13h7M10 8h4M4 18h16v3H4zM2 22c2-1 3 1 5 0", fill: "none" })
  );
});

export default NibOilRig;
