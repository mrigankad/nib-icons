import { createElement as h, forwardRef } from 'react';

export const NibRefund = forwardRef(function NibRefund({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 9a8.5 8.5 0 1 1 1.5 7.5M4 4v5h5M12 7.5v9M14.5 9.5a2 2 0 0 0-2-1.5h-1a1.8 1.8 0 0 0 0 3.6h1a1.8 1.8 0 0 1 0 3.6h-1a2 2 0 0 1-2-1.5", fill: "none" })
  );
});

export default NibRefund;
