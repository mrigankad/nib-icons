import { createElement as h, forwardRef } from 'react';

export const NibShieldShape = forwardRef(function NibShieldShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z", fill: "none" })
  );
});

export default NibShieldShape;
