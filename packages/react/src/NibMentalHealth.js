import { createElement as h, forwardRef } from 'react';

export const NibMentalHealth = forwardRef(function NibMentalHealth({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 21v-3h2a2 2 0 0 0 2-2v-3l2-1-2-3a7 7 0 0 0-14 1c0 3 2 5 3 6v5", fill: "none" }),
    h('path', { d: "M11 13.5s-2.5-1.5-2.5-3a1.3 1.3 0 0 1 2.5-.5 1.3 1.3 0 0 1 2.5.5c0 1.5-2.5 3-2.5 3z", fill: "none" })
  );
});

export default NibMentalHealth;
