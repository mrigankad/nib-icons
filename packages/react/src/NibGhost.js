import { createElement as h, forwardRef } from 'react';

export const NibGhost = forwardRef(function NibGhost({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 21V10a7 7 0 0 1 14 0v11l-2.3-1.7-2.4 1.7-2.3-1.7-2.3 1.7-2.4-1.7zM9.5 10h.01M14.5 10h.01", fill: "none" })
  );
});

export default NibGhost;
