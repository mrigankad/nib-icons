import { createElement as h, forwardRef } from 'react';

export const NibPersonCane = forwardRef(function NibPersonCane({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "4.5", r: "2.2", fill: "none" }),
    h('rect', { x: "7", y: "8.5", width: "6", height: "7", rx: "2", fill: "none" }),
    h('path', { d: "M8.5 15.5V21M11.5 15.5V21M7 10.5l-2 4.5M13 10.5l3.5 3.5M16.5 12.5V21M15 12.5h1.5", fill: "none" })
  );
});

export default NibPersonCane;
