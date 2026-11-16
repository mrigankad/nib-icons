import { createElement as h, forwardRef } from 'react';

export const NibVolcano = forwardRef(function NibVolcano({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21l7-11h6l7 11zM9 10l1.5 2.5 1.5-1.5 1.5 1.5L15 10M12 7V5M9 6L8 4M15 6l1-2", fill: "none" })
  );
});

export default NibVolcano;
