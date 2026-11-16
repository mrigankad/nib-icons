import { createElement as h, forwardRef } from 'react';

export const NibCalendarWeek = forwardRef(function NibCalendarWeek({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M3 10h18M8 3v4M16 3v4M6.5 14.5h11M6.5 17.5h4", fill: "none" })
  );
});

export default NibCalendarWeek;
