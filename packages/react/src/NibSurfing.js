import { createElement as h, forwardRef } from 'react';

export const NibSurfing = forwardRef(function NibSurfing({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "13", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M12 7l-1 5 3 3-1 3M11 12l-3 3M8 9l4-2 4 2M3 18h17c1 0 1-1 0-1.5M2 22c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0", fill: "none" })
  );
});

export default NibSurfing;
