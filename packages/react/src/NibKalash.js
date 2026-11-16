import { createElement as h, forwardRef } from 'react';

export const NibKalash = forwardRef(function NibKalash({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5", r: "2.5", fill: "none" }),
    h('path', { d: "M7 9c1-1.5 3-2 5-2s4 .5 5 2M9 7.5L7 6M15 7.5L17 6M8 10h8M8 10c-3 2-3 9 0 11h8c3-2 3-9 0-11M7 15h10", fill: "none" })
  );
});

export default NibKalash;
