import { createElement as h, forwardRef } from 'react';

export const NibArrowsMaximize = forwardRef(function NibArrowsMaximize({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5", fill: "none" })
  );
});

export default NibArrowsMaximize;
