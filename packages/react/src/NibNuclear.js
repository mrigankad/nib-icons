import { createElement as h, forwardRef } from 'react';

export const NibNuclear = forwardRef(function NibNuclear({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9.5", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "none" }),
    h('path', { d: "M10.5 10.5L7 4.5a8 8 0 0 1 10 0l-3.5 6M10.5 13.5L7 19.5a8 8 0 0 1-5-8.5h7M13.5 13.5l3.5 6a8 8 0 0 0 5-8.5h-7", fill: "none" })
  );
});

export default NibNuclear;
