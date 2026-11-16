import { createElement as h, forwardRef } from 'react';

export const NibGitMerge = forwardRef(function NibGitMerge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "6", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "15", r: "2", fill: "none" }),
    h('path', { d: "M6 7v10M6 7a8 8 0 0 0 10 8", fill: "none" })
  );
});

export default NibGitMerge;
