import { createElement as h, forwardRef } from 'react';

export const NibParagraph = forwardRef(function NibParagraph({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 6h12M4 10h16M4 14h16M4 18h9", fill: "none" })
  );
});

export default NibParagraph;
