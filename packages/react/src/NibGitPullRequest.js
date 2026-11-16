import { createElement as h, forwardRef } from 'react';

export const NibGitPullRequest = forwardRef(function NibGitPullRequest({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "6", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M6 7v10M18 17V9a3 3 0 0 0-3-3h-3M14 3.5L11.5 6 14 8.5", fill: "none" })
  );
});

export default NibGitPullRequest;
