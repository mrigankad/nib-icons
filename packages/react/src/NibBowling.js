import { createElement as h, forwardRef } from 'react';

export const NibBowling = forwardRef(function NibBowling({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "14", r: "7", fill: "none" }),
    h('path', { d: "M7 11h.01M10 10h.01M9 13h.01M17 2c-1 0-1.5 1-1.5 2s1 2 .5 3-1 3-1 5h4c0-2-.5-4-1-5s.5-2 .5-3-.5-2-1.5-2zM16 5h2", fill: "none" })
  );
});

export default NibBowling;
