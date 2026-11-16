import { createElement as h, forwardRef } from 'react';

export const NibAngry = forwardRef(function NibAngry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M7.5 8l3 1.5M16.5 8l-3 1.5M9 11.5h.01M15 11.5h.01M8.5 16.5a4 4 0 0 1 7 0", fill: "none" })
  );
});

export default NibAngry;
