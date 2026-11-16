import { createElement as h, forwardRef } from 'react';

export const NibCheckDouble = forwardRef(function NibCheckDouble({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12.5l5 5L17.5 7M12.5 16l1.5 1.5L22 7", fill: "none" })
  );
});

export default NibCheckDouble;
