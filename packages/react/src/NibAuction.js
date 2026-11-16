import { createElement as h, forwardRef } from 'react';

export const NibAuction = forwardRef(function NibAuction({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3l7 7-3 3-7-7zM12.5 8.5L4 17l3 3 8.5-8.5M3 21.5h10", fill: "none" })
  );
});

export default NibAuction;
