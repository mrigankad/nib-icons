import { createElement as h, forwardRef } from 'react';

export const NibMembership = forwardRef(function NibMembership({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "5", width: "20", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M7.5 15l1-5 3 2.5L12 8l.5 4.5 3-2.5 1 5z", fill: "none" })
  );
});

export default NibMembership;
