import { createElement as h, forwardRef } from 'react';

export const NibCalendarClock = forwardRef(function NibCalendarClock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6M3 10h18M8 3v4M16 3v4M17 15.5V17l1 1", fill: "none" }),
    h('circle', { cx: "17", cy: "17", r: "4", fill: "none" })
  );
});

export default NibCalendarClock;
