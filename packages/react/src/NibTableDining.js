import { createElement as h, forwardRef } from 'react';

export const NibTableDining = forwardRef(function NibTableDining({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 10h18M6 10v10M18 10v10M8 10V8a4 2 0 0 1 8 0v2M2 14h4M18 14h4", fill: "none" })
  );
});

export default NibTableDining;
