import { createElement as h, forwardRef } from 'react';

export const NibCheese = forwardRef(function NibCheese({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11l13-7 5 7zM3 11v8h18v-8", fill: "none" }),
    h('circle', { cx: "8", cy: "15", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "14", r: "1", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "1", fill: "none" })
  );
});

export default NibCheese;
