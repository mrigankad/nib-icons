import { createElement as h, forwardRef } from 'react';

export const NibBlanket = forwardRef(function NibBlanket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18v12a4 4 0 0 1-4 4H3zM3 16h14v4M7 8h10M7 12h10", fill: "none" })
  );
});

export default NibBlanket;
