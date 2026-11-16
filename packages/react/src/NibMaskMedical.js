import { createElement as h, forwardRef } from 'react';

export const NibMaskMedical = forwardRef(function NibMaskMedical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 8c3-1 5-2 7-2s4 1 7 2v6c0 3-4 5-7 5s-7-2-7-5zM5 9H3a1 1 0 0 0-1 1c0 2 1 4 3 4M19 9h2a1 1 0 0 1 1 1c0 2-1 4-3 4M8 11h8M8 14h8", fill: "none" })
  );
});

export default NibMaskMedical;
