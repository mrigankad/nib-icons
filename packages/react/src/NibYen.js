import { createElement as h, forwardRef } from 'react';

export const NibYen = forwardRef(function NibYen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 3l6 9 6-9M12 12v9M7 13h10M7 17h10", fill: "none" })
  );
});

export default NibYen;
