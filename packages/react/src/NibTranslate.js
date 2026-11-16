import { createElement as h, forwardRef } from 'react';

export const NibTranslate = forwardRef(function NibTranslate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5h9M7.5 3v2M10 5c-1 4-3 7-6 9M5.5 9c1.5 2.5 3.5 4 6 5M13 21l4-10 4 10M14.5 17.5h5", fill: "none" })
  );
});

export default NibTranslate;
