import { createElement as h, forwardRef } from 'react';

export const NibCompass = forwardRef(function NibCompass({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('path', { d: "M15.5 8.5l-2 5-5 2 2-5z", fill: "none" })
  );
});

export default NibCompass;
