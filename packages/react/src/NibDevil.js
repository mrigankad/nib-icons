import { createElement as h, forwardRef } from 'react';

export const NibDevil = forwardRef(function NibDevil({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8.5", fill: "none" }),
    h('path', { d: "M5.5 7.5L4 2.5l4.5 2.5M18.5 7.5l1.5-5-4.5 2.5M8.5 10.5l2 1M15.5 10.5l-2 1M8.5 15.5a4 4 0 0 0 7 0", fill: "none" })
  );
});

export default NibDevil;
