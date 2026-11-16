import { createElement as h, forwardRef } from 'react';

export const NibLinkChain = forwardRef(function NibLinkChain({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 8H6a4 4 0 0 0 0 8h4M14 8h4a4 4 0 0 1 0 8h-4M8 12h8", fill: "none" })
  );
});

export default NibLinkChain;
