import { createElement as h, forwardRef } from 'react';

export const NibUserSearch = forwardRef(function NibUserSearch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M3 20a7 7 0 0 1 9.5-6.5M19.5 19l1.5 1.5", fill: "none" }),
    h('circle', { cx: "17.5", cy: "17", r: "2.5", fill: "none" })
  );
});

export default NibUserSearch;
