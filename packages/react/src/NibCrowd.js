import { createElement as h, forwardRef } from 'react';

export const NibCrowd = forwardRef(function NibCrowd({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7.5", r: "3.2", fill: "none" }),
    h('path', { d: "M6.5 20.5a5.5 5.5 0 0 1 11 0M5 9.5a2 2 0 1 0 0 .01M3 19c0-2.5 1.2-4 3-4.3M19 9.5a2 2 0 1 0 0 .01M21 19c0-2.5-1.2-4-3-4.3", fill: "none" })
  );
});

export default NibCrowd;
