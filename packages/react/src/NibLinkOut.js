import { createElement as h, forwardRef } from 'react';

export const NibLinkOut = forwardRef(function NibLinkOut({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 3l-8 8M15 3h6v6M19.5 13A8 8 0 1 1 11 4.5", fill: "none" })
  );
});

export default NibLinkOut;
