import { createElement as h, forwardRef } from 'react';

export const NibCastle = forwardRef(function NibCastle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V5h2v2h2V5h2v5h6V5h2v2h2V5h2v16zM10 21v-4a2 2 0 0 1 4 0v4M2 21h20", fill: "none" })
  );
});

export default NibCastle;
