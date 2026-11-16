import { createElement as h, forwardRef } from 'react';

export const NibBoombox = forwardRef(function NibBoombox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "8", width: "20", height: "12", rx: "2", fill: "none" }),
    h('circle', { cx: "7", cy: "14", r: "3", fill: "none" }),
    h('circle', { cx: "17", cy: "14", r: "3", fill: "none" }),
    h('path', { d: "M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3M11 11h2", fill: "none" })
  );
});

export default NibBoombox;
