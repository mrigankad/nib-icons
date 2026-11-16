import { createElement as h, forwardRef } from 'react';

export const NibZebra = forwardRef(function NibZebra({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 21v-6L4 13l1-3 5-6 1-2 1 2h2c3 0 6 3 6 8v9M12 8l-3 2M14 11l-4 3M17 14l-4 3", fill: "none" })
  );
});

export default NibZebra;
