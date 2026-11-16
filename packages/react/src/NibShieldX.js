import { createElement as h, forwardRef } from 'react';

export const NibShieldX = forwardRef(function NibShieldX({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6zM10 9.5l4 4M14 9.5l-4 4", fill: "none" })
  );
});

export default NibShieldX;
