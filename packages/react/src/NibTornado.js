import { createElement as h, forwardRef } from 'react';

export const NibTornado = forwardRef(function NibTornado({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18M5 8h14M7 12h10M9 16h6M11 20h3", fill: "none" })
  );
});

export default NibTornado;
