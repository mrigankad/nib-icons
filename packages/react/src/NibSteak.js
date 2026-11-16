import { createElement as h, forwardRef } from 'react';

export const NibSteak = forwardRef(function NibSteak({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 4c4 0 7 2 7 6s-3 9-9 10-9-2-9-5 3-3 5-6 3-5 6-5z", fill: "none" }),
    h('circle', { cx: "14", cy: "10", r: "2.5", fill: "none" })
  );
});

export default NibSteak;
