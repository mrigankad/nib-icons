import { createElement as h, forwardRef } from 'react';

export const NibCrib = forwardRef(function NibCrib({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4v17M21 4v17M3 8h18M3 18h18M7 8v10M11 8v10M15 8v10M19 8v10", fill: "none" })
  );
});

export default NibCrib;
