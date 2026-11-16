import { createElement as h, forwardRef } from 'react';

export const NibNut = forwardRef(function NibNut({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 3h10l5 9-5 9H7l-5-9z", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3.5", fill: "none" })
  );
});

export default NibNut;
