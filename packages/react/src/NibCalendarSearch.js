import { createElement as h, forwardRef } from 'react';

export const NibCalendarSearch = forwardRef(function NibCalendarSearch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M3 10h18M8 3v4M16 3v4M18.5 18.5l2.5 2.5", fill: "none" }),
    h('circle', { cx: "16.5", cy: "16.5", r: "2.5", fill: "none" })
  );
});

export default NibCalendarSearch;
