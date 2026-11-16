import { createElement as h, forwardRef } from 'react';

export const NibMeeting = forwardRef(function NibMeeting({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "7", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "7", r: "2.5", fill: "none" }),
    h('path', { d: "M2 16a4 4 0 0 1 8 0M14 16a4 4 0 0 1 8 0M3 19h18", fill: "none" })
  );
});

export default NibMeeting;
