import { createElement as h, forwardRef } from 'react';

export const NibGridDots = forwardRef(function NibGridDots({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 4.5h.01M9.5 4.5h.01M14.5 4.5h.01M19.5 4.5h.01M4.5 9.5h.01M9.5 9.5h.01M14.5 9.5h.01M19.5 9.5h.01M4.5 14.5h.01M9.5 14.5h.01M14.5 14.5h.01M19.5 14.5h.01M4.5 19.5h.01M9.5 19.5h.01M14.5 19.5h.01M19.5 19.5h.01", fill: "none" })
  );
});

export default NibGridDots;
