import { createElement as h, forwardRef } from 'react';

export const NibBid = forwardRef(function NibBid({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "15", cy: "8", r: "5.5", fill: "none" }),
    h('path', { d: "M11 12L4 19M15 6v4M13 8h4", fill: "none" })
  );
});

export default NibBid;
