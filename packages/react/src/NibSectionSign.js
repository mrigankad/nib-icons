import { createElement as h, forwardRef } from 'react';

export const NibSectionSign = forwardRef(function NibSectionSign({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 5a3 3 0 0 0-3-2 3 3 0 0 0-3 3c0 3 6 3 6 6a3 3 0 0 1-3 3M9 19a3 3 0 0 0 3 2 3 3 0 0 0 3-3c0-3-6-3-6-6a3 3 0 0 1 3-3", fill: "none" })
  );
});

export default NibSectionSign;
