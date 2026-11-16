import { createElement as h, forwardRef } from 'react';

export const NibBringForward = forwardRef(function NibBringForward({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "12", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M15 9h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4M9 12V6M6.5 8.5L9 6l2.5 2.5", fill: "none" })
  );
});

export default NibBringForward;
