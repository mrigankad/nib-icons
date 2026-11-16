import { createElement as h, forwardRef } from 'react';

export const NibWorkspace = forwardRef(function NibWorkspace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "14", height: "10", rx: "1.5", fill: "none" }),
    h('path', { d: "M2 17h20M4 17v4M20 17v4M10 13v4M14 13v4", fill: "none" })
  );
});

export default NibWorkspace;
