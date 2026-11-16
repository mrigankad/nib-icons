import { createElement as h, forwardRef } from 'react';

export const NibPentagon = forwardRef(function NibPentagon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2.5l9.5 7-3.6 11H6.1l-3.6-11z", fill: "none" })
  );
});

export default NibPentagon;
