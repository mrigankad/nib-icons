import { createElement as h, forwardRef } from 'react';

export const NibCave = forwardRef(function NibCave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 20L7 7l5-3 5 3 5 13zM8 20v-5a4 4 0 0 1 8 0v5", fill: "none" })
  );
});

export default NibCave;
