import { createElement as h, forwardRef } from 'react';

export const NibToolbox = forwardRef(function NibToolbox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "8", width: "20", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M2 13h20M10 12v2M14 12v2", fill: "none" })
  );
});

export default NibToolbox;
