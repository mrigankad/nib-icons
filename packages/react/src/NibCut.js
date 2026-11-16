import { createElement as h, forwardRef } from 'react';

export const NibCut = forwardRef(function NibCut({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "18", r: "3", fill: "none" }),
    h('circle', { cx: "18", cy: "18", r: "3", fill: "none" }),
    h('path', { d: "M8 15.8L18 3M16 15.8L6 3", fill: "none" })
  );
});

export default NibCut;
