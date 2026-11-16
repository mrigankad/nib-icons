import { createElement as h, forwardRef } from 'react';

export const NibLives = forwardRef(function NibLives({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 15s-3.5-2-3.5-4.5a1.8 1.8 0 0 1 3.5-.8 1.8 1.8 0 0 1 3.5.8C8.5 13 5 15 5 15zM12 15s-3.5-2-3.5-4.5a1.8 1.8 0 0 1 3.5-.8 1.8 1.8 0 0 1 3.5.8C15.5 13 12 15 12 15zM19 15s-3.5-2-3.5-4.5a1.8 1.8 0 0 1 3.5-.8 1.8 1.8 0 0 1 3.5.8C22.5 13 19 15 19 15z", fill: "none" })
  );
});

export default NibLives;
