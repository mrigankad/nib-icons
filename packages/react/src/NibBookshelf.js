import { createElement as h, forwardRef } from 'react';

export const NibBookshelf = forwardRef(function NibBookshelf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18M21 3v18M3 11h18M3 21h18M6 11V5M8.5 11V6M11 11V5M14 11l2-6M6 21v-6M9 21v-7M12 21v-5", fill: "none" })
  );
});

export default NibBookshelf;
