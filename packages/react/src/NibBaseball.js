import { createElement as h, forwardRef } from 'react';

export const NibBaseball = forwardRef(function NibBaseball({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M6 5c2 2 3 5 2 8s-2 5-2 6M18 5c-2 2-3 5-2 8s2 5 2 6", fill: "none" })
  );
});

export default NibBaseball;
