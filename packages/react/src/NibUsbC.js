import { createElement as h, forwardRef } from 'react';

export const NibUsbC = forwardRef(function NibUsbC({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "8", width: "18", height: "8", rx: "4", fill: "none" }),
    h('path', { d: "M7.5 12h9", fill: "none" })
  );
});

export default NibUsbC;
