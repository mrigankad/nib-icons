import { createElement as h, forwardRef } from 'react';

export const NibPersonStanding = forwardRef(function NibPersonStanding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4.5", r: "2.2", fill: "none" }),
    h('rect', { x: "9", y: "8.5", width: "6", height: "7", rx: "2", fill: "none" }),
    h('path', { d: "M10.5 15.5V21M13.5 15.5V21M9 10.5l-2.5 5M15 10.5l2.5 5", fill: "none" })
  );
});

export default NibPersonStanding;
