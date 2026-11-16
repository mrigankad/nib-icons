import { createElement as h, forwardRef } from 'react';

export const NibCoat = forwardRef(function NibCoat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 2h6l5 3v17H4V5zM9 2l3 6 3-6M12 8v14M9.5 12h.01M9.5 16h.01M14.5 12h.01M14.5 16h.01", fill: "none" })
  );
});

export default NibCoat;
