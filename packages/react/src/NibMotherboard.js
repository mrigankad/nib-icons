import { createElement as h, forwardRef } from 'react';

export const NibMotherboard = forwardRef(function NibMotherboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('rect', { x: "6", y: "6", width: "5", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "14", y: "14", width: "4", height: "4", rx: ".5", fill: "none" }),
    h('path', { d: "M14 6.5h4M14 9.5h4M6 15h4M6 18h4", fill: "none" })
  );
});

export default NibMotherboard;
