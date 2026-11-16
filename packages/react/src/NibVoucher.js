import { createElement as h, forwardRef } from 'react';

export const NibVoucher = forwardRef(function NibVoucher({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4zM7 10h5M7 14h3", fill: "none" }),
    h('path', { d: "M15.5 5v14", fill: "none", strokeDasharray: "2 2" })
  );
});

export default NibVoucher;
