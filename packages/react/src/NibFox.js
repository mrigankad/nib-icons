import { createElement as h, forwardRef } from 'react';

export const NibFox = forwardRef(function NibFox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3l5 5h8l5-5v8l-9 10-9-10zM3 11l6 2M21 11l-6 2M9.5 11h.01M14.5 11h.01M11 17h2", fill: "none" })
  );
});

export default NibFox;
