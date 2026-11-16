import { createElement as h, forwardRef } from 'react';

export const NibSchedule = forwardRef(function NibSchedule({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M3 10h18M8 3v4M16 3v4M7 14h4M14 14h3M7 17.5h7", fill: "none" })
  );
});

export default NibSchedule;
