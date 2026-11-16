import { createElement as h, forwardRef } from 'react';

export const NibPersonMeditating = forwardRef(function NibPersonMeditating({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2.2", fill: "none" }),
    h('rect', { x: "9.5", y: "8.5", width: "5", height: "6", rx: "2", fill: "none" }),
    h('path', { d: "M9.5 10.5L6.5 15.5M14.5 10.5l3 5M3.5 19c3 2.5 5.5 1.5 8.5-.5 3 2 5.5 3 8.5.5", fill: "none" })
  );
});

export default NibPersonMeditating;
