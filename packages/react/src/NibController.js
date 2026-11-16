import { createElement as h, forwardRef } from 'react';

export const NibController = forwardRef(function NibController({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 7h12a4 4 0 0 1 4 4l-1 6a2.5 2.5 0 0 1-4.5 1L15 16H9l-1.5 2A2.5 2.5 0 0 1 3 17l-1-6a4 4 0 0 1 4-4zM7 10v4M5 12h4M15 11h.01M18 13h.01", fill: "none" })
  );
});

export default NibController;
