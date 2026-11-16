import { createElement as h, forwardRef } from 'react';

export const NibChocolate = forwardRef(function NibChocolate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9l-3 2 1 2-3 1 1 2zM12 3v15M6 8h12M6 13h12", fill: "none" })
  );
});

export default NibChocolate;
