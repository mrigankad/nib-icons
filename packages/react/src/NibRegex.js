import { createElement as h, forwardRef } from 'react';

export const NibRegex = forwardRef(function NibRegex({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M17 3v8M13.5 5l7 4M20.5 5l-7 4", fill: "none" }),
    h('rect', { x: "4", y: "15", width: "5", height: "5", rx: "1", fill: "none" })
  );
});

export default NibRegex;
