import { createElement as h, forwardRef } from 'react';

export const NibClose = forwardRef(function NibClose({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 6l12 12M18 6L6 18", fill: "none" })
  );
});

export default NibClose;
