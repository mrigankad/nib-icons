import { createElement as h, forwardRef } from 'react';

export const NibCoupon = forwardRef(function NibCoupon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4zM9.5 15l5-6", fill: "none" }),
    h('circle', { cx: "9.5", cy: "9.5", r: ".8", fill: "none" }),
    h('circle', { cx: "14.5", cy: "14.5", r: ".8", fill: "none" })
  );
});

export default NibCoupon;
