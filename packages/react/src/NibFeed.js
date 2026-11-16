import { createElement as h, forwardRef } from 'react';

export const NibFeed = forwardRef(function NibFeed({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M7 11a6 6 0 0 1 6 6M7 7a10 10 0 0 1 10 10", fill: "none" }),
    h('circle', { cx: "7.5", cy: "16.5", r: ".8", fill: "none" })
  );
});

export default NibFeed;
