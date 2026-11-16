import { createElement as h, forwardRef } from 'react';

export const NibAsterisk = forwardRef(function NibAsterisk({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 4v16M5.1 8l13.8 8M18.9 8L5.1 16", fill: "none" })
  );
});

export default NibAsterisk;
