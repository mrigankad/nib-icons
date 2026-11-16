import { createElement as h, forwardRef } from 'react';

export const NibTvRetro = forwardRef(function NibTvRetro({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "6", width: "20", height: "15", rx: "2", fill: "none" }),
    h('rect', { x: "5", y: "9", width: "10", height: "9", rx: "2", fill: "none" }),
    h('path', { d: "M8 2l4 4 4-4M18.5 11h.01M18.5 14.5h.01", fill: "none" })
  );
});

export default NibTvRetro;
