import { createElement as h, forwardRef } from 'react';

export const NibTorus = forwardRef(function NibTorus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "12", rx: "10", ry: "6", fill: "none" }),
    h('path', { d: "M7 11.5c2 2 8 2 10 0M8.5 12.5c2-1.5 5-1.5 7 0", fill: "none" })
  );
});

export default NibTorus;
