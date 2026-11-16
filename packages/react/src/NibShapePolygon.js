import { createElement as h, forwardRef } from 'react';

export const NibShapePolygon = forwardRef(function NibShapePolygon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l9 6.5-3.5 10.5h-11L3 9.5z", fill: "none" })
  );
});

export default NibShapePolygon;
