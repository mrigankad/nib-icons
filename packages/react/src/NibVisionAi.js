import { createElement as h, forwardRef } from 'react';

export const NibVisionAi = forwardRef(function NibVisionAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7V4h3M18 4h3v3M21 17v3h-3M6 20H3v-3M5 12s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "2", fill: "none" })
  );
});

export default NibVisionAi;
