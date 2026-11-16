import { createElement as h, forwardRef } from 'react';

export const NibBoneMedical = forwardRef(function NibBoneMedical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 0 5l11 11a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 0-5L9 4zM14 5l1.5 1.5M17 8l1.5 1.5", fill: "none" })
  );
});

export default NibBoneMedical;
