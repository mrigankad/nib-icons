import { createElement as h, forwardRef } from 'react';

export const NibScholarship = forwardRef(function NibScholarship({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 7l10-4 10 4-10 4zM6 9v4c3 2 9 2 12 0V9", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "4", fill: "none" }),
    h('path', { d: "M17 15v4M18.3 15.7h-2a.8.8 0 0 0 0 1.6h1.4a.8.8 0 0 1 0 1.6H15.7", fill: "none" })
  );
});

export default NibScholarship;
