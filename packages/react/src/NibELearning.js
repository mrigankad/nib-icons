import { createElement as h, forwardRef } from 'react';

export const NibELearning = forwardRef(function NibELearning({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "4", width: "18", height: "12", rx: "2", fill: "none" }),
    h('path', { d: "M1 20h22M7 9l5-2.5L17 9l-5 2.5zM9 10v2c2 1 4 1 6 0v-2", fill: "none" })
  );
});

export default NibELearning;
