import { createElement as h, forwardRef } from 'react';

export const NibBee = forwardRef(function NibBee({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "15", rx: "4.5", ry: "6", fill: "none" }),
    h('path', { d: "M7.7 13h8.6M7.7 17h8.6M12 9V7M10 4l2 3 2-3M8 10C5 10 3 8 4 6s4-1 5 3M16 10c3 0 5-2 4-4s-4-1-5 3", fill: "none" })
  );
});

export default NibBee;
