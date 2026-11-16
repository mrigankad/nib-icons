import { createElement as h, forwardRef } from 'react';

export const NibBagPlus = forwardRef(function NibBagPlus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 7h14l1 14H4zM9 7V6a3 3 0 0 1 6 0v1M12 11.5v6M9 14.5h6", fill: "none" })
  );
});

export default NibBagPlus;
