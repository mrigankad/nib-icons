import { createElement as h, forwardRef } from 'react';

export const NibPercent = forwardRef(function NibPercent({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M19 5L5 19", fill: "none" }),
    h('circle', { cx: "6.5", cy: "6.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "17.5", cy: "17.5", r: "2.5", fill: "none" })
  );
});

export default NibPercent;
