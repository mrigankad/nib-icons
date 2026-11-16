import { createElement as h, forwardRef } from 'react';

export const NibPaintbrush = forwardRef(function NibPaintbrush({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 3l3 3-9 9-3-3zM9 12l-1.5 1.5M3 21c3 0 5.5-1 5.5-3.5a2 2 0 0 0-3.5-1.3C3.7 17.5 4.3 19 3 21z", fill: "none" })
  );
});

export default NibPaintbrush;
