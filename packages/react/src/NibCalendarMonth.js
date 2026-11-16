import { createElement as h, forwardRef } from 'react';

export const NibCalendarMonth = forwardRef(function NibCalendarMonth({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M3 10h18M8 3v4M16 3v4M3 15.5h18M9 10v11M15 10v11", fill: "none" })
  );
});

export default NibCalendarMonth;
