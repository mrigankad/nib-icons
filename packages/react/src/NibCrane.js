import { createElement as h, forwardRef } from 'react';

export const NibCrane = forwardRef(function NibCrane({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 22V4h3v18M2 22h12M2 4h20M9 4l-3 4M22 4v6M20 10h4v3h-4zM6 8l3 3M9 8l-3 3M6 14l3 3M9 14l-3 3", fill: "none" })
  );
});

export default NibCrane;
