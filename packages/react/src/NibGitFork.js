import { createElement as h, forwardRef } from 'react';

export const NibGitFork = forwardRef(function NibGitFork({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "18", cy: "5", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "19", r: "2", fill: "none" }),
    h('path', { d: "M6 7v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 12v5", fill: "none" })
  );
});

export default NibGitFork;
