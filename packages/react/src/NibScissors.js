import { createElement as h, forwardRef } from 'react';

export const NibScissors = forwardRef(function NibScissors({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "6", r: "3", fill: "none" }),
    h('circle', { cx: "6", cy: "18", r: "3", fill: "none" }),
    h('path', { d: "M8.1 8.1L20 20M8.1 15.9L20 4", fill: "none" })
  );
});

export default NibScissors;
