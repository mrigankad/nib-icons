import { createElement as h, forwardRef } from 'react';

export const NibDonut = forwardRef(function NibDonut({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" }),
    h('path', { d: "M5 9l1 1M8 5l1 1.5M16 5.5l-1 1M19 10l-1.5.5M17 17l-1-1M7 17l1-1", fill: "none" })
  );
});

export default NibDonut;
