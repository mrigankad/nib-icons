import { createElement as h, forwardRef } from 'react';

export const NibBlackboard = forwardRef(function NibBlackboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M6 21l2-5M18 21l-2-5M7 7l2 2 2-2M13 7h4M7 12h10", fill: "none" })
  );
});

export default NibBlackboard;
