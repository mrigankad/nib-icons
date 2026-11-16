import { createElement as h, forwardRef } from 'react';

export const NibLint = forwardRef(function NibLint({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 6h12M4 11h8M4 16h5M13 17l2.5 2.5L21 14M19 4l.5 1.5L21 6l-1.5.5L19 8l-.5-1.5L17 6l1.5-.5z", fill: "none" })
  );
});

export default NibLint;
