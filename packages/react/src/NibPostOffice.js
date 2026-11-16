import { createElement as h, forwardRef } from 'react';

export const NibPostOffice = forwardRef(function NibPostOffice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V9l9-6 9 6v12M2 21h20", fill: "none" }),
    h('rect', { x: "7", y: "11", width: "10", height: "7", rx: "1", fill: "none" }),
    h('path', { d: "M7 12l5 3 5-3", fill: "none" })
  );
});

export default NibPostOffice;
