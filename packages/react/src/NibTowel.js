import { createElement as h, forwardRef } from 'react';

export const NibTowel = forwardRef(function NibTowel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18M6 4v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4M6 14h12M6 16h12", fill: "none" })
  );
});

export default NibTowel;
