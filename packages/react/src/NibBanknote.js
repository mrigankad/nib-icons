import { createElement as h, forwardRef } from 'react';

export const NibBanknote = forwardRef(function NibBanknote({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M5 6a3 3 0 0 1-3 3M19 6a3 3 0 0 0 3 3M5 18a3 3 0 0 0-3-3M19 18a3 3 0 0 1 3-3", fill: "none" }),
    h('circle', { cx: "12", cy: "12", r: "3", fill: "none" })
  );
});

export default NibBanknote;
