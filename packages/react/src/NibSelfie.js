import { createElement as h, forwardRef } from 'react';

export const NibSelfie = forwardRef(function NibSelfie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "2", width: "12", height: "20", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "10", r: "2.5", fill: "none" }),
    h('path', { d: "M8.5 16.5a3.5 3.5 0 0 1 7 0M11 4.5h2", fill: "none" })
  );
});

export default NibSelfie;
