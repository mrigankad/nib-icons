import { createElement as h, forwardRef } from 'react';

export const NibPlusShape = forwardRef(function NibPlusShape({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z", fill: "none" })
  );
});

export default NibPlusShape;
