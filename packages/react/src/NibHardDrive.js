import { createElement as h, forwardRef } from 'react';

export const NibHardDrive = forwardRef(function NibHardDrive({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "13", width: "20", height: "8", rx: "2", fill: "none" }),
    h('path', { d: "M2 15L5.5 4.5A2 2 0 0 1 7.4 3h9.2a2 2 0 0 1 1.9 1.5L22 15M6 17h.01M10 17h.01", fill: "none" })
  );
});

export default NibHardDrive;
