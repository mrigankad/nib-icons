import { createElement as h, forwardRef } from 'react';

export const NibRabbit = forwardRef(function NibRabbit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9.5 10C8 7 8 2 9.5 2S12 6 12 9M14.5 10C16 7 16 2 14.5 2S12 6 12 9M6 16a6 6 0 0 1 12 0c0 3-3 6-6 6s-6-3-6-6zM10 15h.01M14 15h.01M11 18h2", fill: "none" })
  );
});

export default NibRabbit;
