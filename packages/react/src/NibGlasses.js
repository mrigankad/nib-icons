import { createElement as h, forwardRef } from 'react';

export const NibGlasses = forwardRef(function NibGlasses({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6.5", cy: "14", r: "4", fill: "none" }),
    h('circle', { cx: "17.5", cy: "14", r: "4", fill: "none" }),
    h('path', { d: "M10.5 14a1.5 1.5 0 0 1 3 0M2.5 14L4 7M21.5 14L20 7", fill: "none" })
  );
});

export default NibGlasses;
