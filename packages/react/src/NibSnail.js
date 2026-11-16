import { createElement as h, forwardRef } from 'react';

export const NibSnail = forwardRef(function NibSnail({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 19h17a3 3 0 0 0 3-3V9M21 9l-1-4M22.5 9.5L23 6", fill: "none" }),
    h('circle', { cx: "11", cy: "12", r: "7", fill: "none" }),
    h('path', { d: "M11 12a2 2 0 1 1 2-2 4 4 0 0 1-4 4 6 6 0 0 1-6-6", fill: "none" })
  );
});

export default NibSnail;
