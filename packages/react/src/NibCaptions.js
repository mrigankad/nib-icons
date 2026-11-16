import { createElement as h, forwardRef } from 'react';

export const NibCaptions = forwardRef(function NibCaptions({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M10.5 10a2 2 0 1 0 0 4M17.5 10a2 2 0 1 0 0 4", fill: "none" })
  );
});

export default NibCaptions;
