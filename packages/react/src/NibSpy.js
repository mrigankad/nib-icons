import { createElement as h, forwardRef } from 'react';

export const NibSpy = forwardRef(function NibSpy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9.5h18M7 9.5l1.5-6h7l1.5 6M6 21a6 6 0 0 1 12 0M11 14.5h2", fill: "none" }),
    h('circle', { cx: "9", cy: "14.5", r: "2", fill: "none" }),
    h('circle', { cx: "15", cy: "14.5", r: "2", fill: "none" })
  );
});

export default NibSpy;
