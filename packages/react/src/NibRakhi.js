import { createElement as h, forwardRef } from 'react';

export const NibRakhi = forwardRef(function NibRakhi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2.5 12H6.5M17.5 12H21.5", fill: "none" }),
    h('circle', { cx: "12", cy: "8.5", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "15.5", r: "2", fill: "none" }),
    h('circle', { cx: "8.5", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "15.5", cy: "12", r: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "1", fill: "none" })
  );
});

export default NibRakhi;
