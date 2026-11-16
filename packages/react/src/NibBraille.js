import { createElement as h, forwardRef } from 'react';

export const NibBraille = forwardRef(function NibBraille({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "5", r: "1.5", fill: "currentColor" }),
    h('circle', { cx: "7", cy: "12", r: "1.5", fill: "none" }),
    h('circle', { cx: "7", cy: "19", r: "1.5", fill: "currentColor" }),
    h('circle', { cx: "17", cy: "5", r: "1.5", fill: "currentColor" }),
    h('circle', { cx: "17", cy: "12", r: "1.5", fill: "currentColor" }),
    h('circle', { cx: "17", cy: "19", r: "1.5", fill: "none" })
  );
});

export default NibBraille;
