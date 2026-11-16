import { createElement as h, forwardRef } from 'react';

export const NibSliderHorizontal = forwardRef(function NibSliderHorizontal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7h9M17 7h4M3 17h3M11 17h10", fill: "none" }),
    h('circle', { cx: "14.5", cy: "7", r: "2.5", fill: "none" }),
    h('circle', { cx: "8.5", cy: "17", r: "2.5", fill: "none" })
  );
});

export default NibSliderHorizontal;
