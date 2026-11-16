import { createElement as h, forwardRef } from 'react';

export const NibCable = forwardRef(function NibCable({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 9V5M7.5 9V5M3 9h6v3a3 3 0 0 1-6 0zM6 15v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9M15.5 4h5v5h-5z", fill: "none" })
  );
});

export default NibCable;
