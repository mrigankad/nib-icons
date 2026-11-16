import { createElement as h, forwardRef } from 'react';

export const NibChurch = forwardRef(function NibChurch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v5M10 4h4M8 11l4-4 4 4v10H8zM4 21v-7l4-3M20 21v-7l-4-3M10 21v-3a2 2 0 0 1 4 0v3M2 21h20", fill: "none" })
  );
});

export default NibChurch;
