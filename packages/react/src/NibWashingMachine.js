import { createElement as h, forwardRef } from 'react';

export const NibWashingMachine = forwardRef(function NibWashingMachine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "18", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M3 7h18M6 4.5h.01M9 4.5h.01", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "5", fill: "none" }),
    h('path', { d: "M9.5 14c1-1 2 1 3 0s1.5 0 2.5 0", fill: "none" })
  );
});

export default NibWashingMachine;
