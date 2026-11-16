import { createElement as h, forwardRef } from 'react';

export const NibWishlist = forwardRef(function NibWishlist({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h10M3 11h6M3 16h5M17 20s-5-2.8-5-6.2a2.5 2.5 0 0 1 5-1 2.5 2.5 0 0 1 5 1c0 3.4-5 6.2-5 6.2z", fill: "none" })
  );
});

export default NibWishlist;
