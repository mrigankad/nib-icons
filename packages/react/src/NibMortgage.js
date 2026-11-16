import { createElement as h, forwardRef } from 'react';

export const NibMortgage = forwardRef(function NibMortgage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11l9-7 9 7M5 9.5V20h14V9.5M12 10.5v7M14 12a1.6 1.6 0 0 0-1.6-1h-.8a1.4 1.4 0 0 0 0 2.8h.8a1.4 1.4 0 0 1 0 2.8h-.8A1.6 1.6 0 0 1 10 15.5", fill: "none" })
  );
});

export default NibMortgage;
