import { createElement as h, forwardRef } from 'react';

export const NibBus = forwardRef(function NibBus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "3", width: "16", height: "16", rx: "3", fill: "none" }),
    h('path', { d: "M4 11h16M4 7h16M7 19v2M17 19v2M7.5 15h.01M16.5 15h.01", fill: "none" })
  );
});

export default NibBus;
