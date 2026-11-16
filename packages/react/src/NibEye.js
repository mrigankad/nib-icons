import { createElement as h, forwardRef } from 'react';

export const NibEye = forwardRef(function NibEye({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" })
  );
});

export default NibEye;
