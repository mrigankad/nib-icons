import { createElement as h, forwardRef } from 'react';

export const NibIncense = forwardRef(function NibIncense({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22V10M6 22h12M12 10c-1-1-1-2 0-3s1-2 0-3M14 6c1-1 1-2 0-3", fill: "none" })
  );
});

export default NibIncense;
