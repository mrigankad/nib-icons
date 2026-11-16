import { createElement as h, forwardRef } from 'react';

export const NibSignLanguage = forwardRef(function NibSignLanguage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 11V5a1.5 1.5 0 0 1 3 0v5M10 9V3.5a1.5 1.5 0 0 1 3 0V10M13 9.5V5a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7 5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.5-1.5L7 15M19 6l2-2M19.5 10H22", fill: "none" })
  );
});

export default NibSignLanguage;
