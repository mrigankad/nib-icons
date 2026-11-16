import { createElement as h, forwardRef } from 'react';

export const NibGuitar = forwardRef(function NibGuitar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M13.5 10.5L20 4M18 2l4 4M9.5 11a3 3 0 0 0-4.6.6c-.8 1.3-.4 2.4-1.4 3.4s-1.5 2 0 3.5l2 2c1.5 1.5 2.5 1 3.5 0s2.1-.6 3.4-1.4a3 3 0 0 0 .6-4.6z", fill: "none" }),
    h('circle', { cx: "9", cy: "15", r: "1.2", fill: "none" })
  );
});

export default NibGuitar;
