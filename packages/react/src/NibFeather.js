import { createElement as h, forwardRef } from 'react';

export const NibFeather = forwardRef(function NibFeather({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M20 4c-6 0-11 4-12 11l-1 3h3c7-1 10-6 10-14zM4 21l12-13M9 13h6M12 9h5", fill: "none" })
  );
});

export default NibFeather;
