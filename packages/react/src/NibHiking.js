import { createElement as h, forwardRef } from 'react';

export const NibHiking = forwardRef(function NibHiking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "11", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M10 8l-2 6 3 3 1 5M10 8l3 3 3 1M9 13l-3 8M18 9v13M7 9l-1 4", fill: "none" })
  );
});

export default NibHiking;
