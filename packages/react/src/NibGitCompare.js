import { createElement as h, forwardRef } from 'react';

export const NibGitCompare = forwardRef(function NibGitCompare({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "6", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "18", r: "2", fill: "none" }),
    h('path', { d: "M6 8v6a4 4 0 0 0 4 4h3M11 15.5l2.5 2.5-2.5 2.5M18 16v-6a4 4 0 0 0-4-4h-3M13 3.5L10.5 6 13 8.5", fill: "none" })
  );
});

export default NibGitCompare;
