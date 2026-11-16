import { createElement as h, forwardRef } from 'react';

export const NibWorld = forwardRef(function NibWorld({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M6.5 4.5c1 2 3 2.5 3 4.5s-2 2-2 4 2 3 2 5.5M15 2.5c-.5 1.5 0 3 1.5 3.5s2.5 2 2 4M21 15c-1.5 0-3 .5-3.5 2.5", fill: "none" })
  );
});

export default NibWorld;
