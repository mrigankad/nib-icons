import { createElement as h, forwardRef } from 'react';

export const NibTrumpet = forwardRef(function NibTrumpet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 10v4M2 12h13M15 9v6l7 3V6zM6 12V9M9 12V9M12 12V9M5 12v2a3 3 0 0 0 3 3h7", fill: "none" })
  );
});

export default NibTrumpet;
