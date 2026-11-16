import { createElement as h, forwardRef } from 'react';

export const NibDecrypt = forwardRef(function NibDecrypt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "11", width: "16", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M8 11V7a4 4 0 0 1 7.7-1.5M8 16h8", fill: "none" })
  );
});

export default NibDecrypt;
