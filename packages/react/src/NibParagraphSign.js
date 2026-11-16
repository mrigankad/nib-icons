import { createElement as h, forwardRef } from 'react';

export const NibParagraphSign = forwardRef(function NibParagraphSign({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13 4v16M17 4v16M19 4h-9a4.5 4.5 0 0 0 0 9h3", fill: "none" })
  );
});

export default NibParagraphSign;
