import { createElement as h, forwardRef } from 'react';

export const NibOxygen = forwardRef(function NibOxygen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "8", y: "6", width: "8", height: "16", rx: "4", fill: "none" }),
    h('path', { d: "M10 6V3h4v3M14 3h3v2", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "2", fill: "none" })
  );
});

export default NibOxygen;
