import { createElement as h, forwardRef } from 'react';

export const NibStepper = forwardRef(function NibStepper({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "3", fill: "none" }),
    h('path', { d: "M12 7v10M5.5 12h3M15.5 12h3M17 10.5v3", fill: "none" })
  );
});

export default NibStepper;
