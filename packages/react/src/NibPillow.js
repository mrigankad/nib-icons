import { createElement as h, forwardRef } from 'react';

export const NibPillow = forwardRef(function NibPillow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 6c2-1 14-1 16 0 1 2 1 10 0 12-2 1-14 1-16 0-1-2-1-10 0-12zM4 6l2 2M20 6l-2 2M4 18l2-2M20 18l-2-2", fill: "none" })
  );
});

export default NibPillow;
