import { createElement as h, forwardRef } from 'react';

export const NibFlashcard = forwardRef(function NibFlashcard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "16", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M6 4h14a2 2 0 0 1 2 2v9M7 13h6", fill: "none" })
  );
});

export default NibFlashcard;
