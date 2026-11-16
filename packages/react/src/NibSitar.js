import { createElement as h, forwardRef } from 'react';

export const NibSitar = forwardRef(function NibSitar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "17", r: "5", fill: "none" }),
    h('path', { d: "M10.5 13.5L21 3M18 2l3 3M9 15l-3 3M15 9l1 1M13 11l1 1", fill: "none" })
  );
});

export default NibSitar;
