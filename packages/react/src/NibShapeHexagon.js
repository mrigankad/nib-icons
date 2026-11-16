import { createElement as h, forwardRef } from 'react';

export const NibShapeHexagon = forwardRef(function NibShapeHexagon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l8 4.5v9L12 21l-8-4.5v-9z", fill: "none" })
  );
});

export default NibShapeHexagon;
