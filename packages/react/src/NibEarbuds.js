import { createElement as h, forwardRef } from 'react';

export const NibEarbuds = forwardRef(function NibEarbuds({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "7", r: "3", fill: "none" }),
    h('circle', { cx: "17", cy: "7", r: "3", fill: "none" }),
    h('path', { d: "M8.5 9.5V20M15.5 9.5V20", fill: "none" })
  );
});

export default NibEarbuds;
