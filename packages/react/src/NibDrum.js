import { createElement as h, forwardRef } from 'react';

export const NibDrum = forwardRef(function NibDrum({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "9", rx: "9", ry: "3.5", fill: "none" }),
    h('path', { d: "M3 9v8c0 2 4 3.5 9 3.5s9-1.5 9-3.5V9M5 3l5 5.5M19 3l-5 5.5", fill: "none" })
  );
});

export default NibDrum;
