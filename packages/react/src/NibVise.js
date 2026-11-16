import { createElement as h, forwardRef } from 'react';

export const NibVise = forwardRef(function NibVise({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h6v8H3zM13 6h6v8h-6zM9 10h4M19 10h3M22 7v6M3 14v4h16v-4M2 21h20", fill: "none" })
  );
});

export default NibVise;
