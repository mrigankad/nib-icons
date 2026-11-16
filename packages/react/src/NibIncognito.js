import { createElement as h, forwardRef } from 'react';

export const NibIncognito = forwardRef(function NibIncognito({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2.5 10.5h19M6 10.5L8 4h8l2 6.5M10.5 16h3", fill: "none" }),
    h('circle', { cx: "7.5", cy: "16", r: "3", fill: "none" }),
    h('circle', { cx: "16.5", cy: "16", r: "3", fill: "none" })
  );
});

export default NibIncognito;
