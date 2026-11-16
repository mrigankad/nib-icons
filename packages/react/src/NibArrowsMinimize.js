import { createElement as h, forwardRef } from 'react';

export const NibArrowsMinimize = forwardRef(function NibArrowsMinimize({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3v5H3M21 8h-5V3M16 21v-5h5M3 16h5v5", fill: "none" })
  );
});

export default NibArrowsMinimize;
