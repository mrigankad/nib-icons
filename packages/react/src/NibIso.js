import { createElement as h, forwardRef } from 'react';

export const NibIso = forwardRef(function NibIso({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M5.5 9.5v5M11 10a1.5 1.5 0 1 0-1.5 2 1.5 1.5 0 1 1-1.6 2.3", fill: "none" }),
    h('circle', { cx: "16", cy: "12", r: "2.5", fill: "none" })
  );
});

export default NibIso;
