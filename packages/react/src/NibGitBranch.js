import { createElement as h, forwardRef } from 'react';

export const NibGitBranch = forwardRef(function NibGitBranch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "19", r: "2", fill: "none" }),
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "6", r: "2", fill: "none" }),
    h('path', { d: "M6 7v10M18 8v1a4 4 0 0 1-4 4H9a3 3 0 0 0-3 3", fill: "none" })
  );
});

export default NibGitBranch;
