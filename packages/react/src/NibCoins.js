import { createElement as h, forwardRef } from 'react';

export const NibCoins = forwardRef(function NibCoins({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "9", cy: "6.5", rx: "6", ry: "2.5", fill: "none" }),
    h('path', { d: "M3 6.5v4C3 11.9 5.7 13 9 13M9 14v3.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V14", fill: "none" }),
    h('ellipse', { cx: "15", cy: "14", rx: "6", ry: "2.5", fill: "none" })
  );
});

export default NibCoins;
