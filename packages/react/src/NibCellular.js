import { createElement as h, forwardRef } from 'react';

export const NibCellular = forwardRef(function NibCellular({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 20h17V3zM9 20v-3M13 20v-7", fill: "none" })
  );
});

export default NibCellular;
