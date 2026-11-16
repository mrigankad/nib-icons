import { createElement as h, forwardRef } from 'react';

export const NibResume = forwardRef(function NibResume({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none" }),
    h('circle', { cx: "9.5", cy: "8", r: "2", fill: "none" }),
    h('path', { d: "M6.5 13a3 3 0 0 1 6 0M14.5 7h3M14.5 10h3M7 16.5h10M7 19h7", fill: "none" })
  );
});

export default NibResume;
