import { createElement as h, forwardRef } from 'react';

export const NibAutoRickshaw = forwardRef(function NibAutoRickshaw({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 17V10c0-3 3-5 7-5h6v12M3 11h8V5M16 9h3l2 4v4h-1M8.5 17h5M3 17h1", fill: "none" }),
    h('circle', { cx: "6", cy: "17.5", r: "2", fill: "none" }),
    h('circle', { cx: "16", cy: "17.5", r: "2", fill: "none" })
  );
});

export default NibAutoRickshaw;
