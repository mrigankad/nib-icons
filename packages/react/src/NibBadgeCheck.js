import { createElement as h, forwardRef } from 'react';

export const NibBadgeCheck = forwardRef(function NibBadgeCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "9", r: "6.5", fill: "none" }),
    h('path', { d: "M8.5 14.5L7 22l5-3 5 3-1.5-7.5M9.5 9l1.8 1.8 3.2-3.3", fill: "none" })
  );
});

export default NibBadgeCheck;
