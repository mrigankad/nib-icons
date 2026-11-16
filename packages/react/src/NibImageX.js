import { createElement as h, forwardRef } from 'react';

export const NibImageX = forwardRef(function NibImageX({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7M3 17l5-5 4 4M16 15l5 5M21 15l-5 5", fill: "none" }),
    h('circle', { cx: "8.5", cy: "8.5", r: "1.5", fill: "none" })
  );
});

export default NibImageX;
