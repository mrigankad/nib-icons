import { createElement as h, forwardRef } from 'react';

export const NibUnderline = forwardRef(function NibUnderline({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4v7a5 5 0 0 0 10 0V4M5 20h14", fill: "none" })
  );
});

export default NibUnderline;
