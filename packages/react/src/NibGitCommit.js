import { createElement as h, forwardRef } from 'react';

export const NibGitCommit = forwardRef(function NibGitCommit({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "3.5", fill: "none" }),
    h('path', { d: "M3 12h5.5M15.5 12H21", fill: "none" })
  );
});

export default NibGitCommit;
