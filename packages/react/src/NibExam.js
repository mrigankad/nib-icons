import { createElement as h, forwardRef } from 'react';

export const NibExam = forwardRef(function NibExam({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "3", width: "16", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M8 8l1 1 2-2M13 8h3M8 13l1 1 2-2M13 13h3M8 17h.01M13 17h3", fill: "none" })
  );
});

export default NibExam;
