import { createElement as h, forwardRef } from 'react';

export const NibFrog = forwardRef(function NibFrog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7.5", cy: "7", r: "2.5", fill: "none" }),
    h('circle', { cx: "16.5", cy: "7", r: "2.5", fill: "none" }),
    h('path', { d: "M5 9c-2 2-3 4-3 6 0 3 4 5 10 5s10-2 10-5c0-2-1-4-3-6M8 14c2 1.5 6 1.5 8 0M7.5 7h.01M16.5 7h.01", fill: "none" })
  );
});

export default NibFrog;
