import { createElement as h, forwardRef } from 'react';

export const NibMouseAnimal = forwardRef(function NibMouseAnimal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "8", r: "3", fill: "none" }),
    h('path', { d: "M8.5 10.5C6 12 5 14 5 16a5 5 0 0 0 5 5h4a6 6 0 0 0 6-6c0-3-2-5-5-5a6 6 0 0 0-4 1M20 15c2 0 2 4 0 4M5.5 16h.01", fill: "none" })
  );
});

export default NibMouseAnimal;
