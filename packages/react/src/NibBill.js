import { createElement as h, forwardRef } from 'react';

export const NibBill = forwardRef(function NibBill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h14v18l-2.3-1.5-2.4 1.5-2.3-1.5-2.3 1.5-2.4-1.5L5 21zM12 6.5v1M12 15v1M14 9a2 2 0 0 0-2-1.3 1.7 1.7 0 0 0 0 3.5 1.7 1.7 0 0 1 0 3.5A2 2 0 0 1 10 13.5", fill: "none" })
  );
});

export default NibBill;
