import { createElement as h, forwardRef } from 'react';

export const NibLoan = forwardRef(function NibLoan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 15h4l5 2h4a1.5 1.5 0 0 0 0-3h-3M6 21h9l6-4a1.5 1.5 0 0 0-2-2.2L15 17M2 13v8", fill: "none" }),
    h('circle', { cx: "15", cy: "7", r: "4", fill: "none" })
  );
});

export default NibLoan;
