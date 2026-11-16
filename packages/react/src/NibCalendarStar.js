import { createElement as h, forwardRef } from 'react';

export const NibCalendarStar = forwardRef(function NibCalendarStar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "18", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M3 10h18M8 3v4M16 3v4M12 12.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z", fill: "none" })
  );
});

export default NibCalendarStar;
