import { createElement as h, forwardRef } from 'react';

export const NibMicrowave = forwardRef(function NibMicrowave({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('rect', { x: "5", y: "8", width: "10", height: "8", rx: "1", fill: "none" }),
    h('path', { d: "M18 8.5h.01M18 11.5h.01M18 15h.01M2 19v1M22 19v1", fill: "none" })
  );
});

export default NibMicrowave;
