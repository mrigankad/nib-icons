import { createElement as h, forwardRef } from 'react';

export const NibSlider = forwardRef(function NibSlider({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h3.5M11.5 12H21", fill: "none" }),
    h('circle', { cx: "9", cy: "12", r: "2.5", fill: "none" })
  );
});

export default NibSlider;
