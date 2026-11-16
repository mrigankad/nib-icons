import { createElement as h, forwardRef } from 'react';

export const NibTags = forwardRef(function NibTags({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 11V4a1 1 0 0 1 1-1h7l8 8-7 7zM14 3l8 8-7 7", fill: "none" }),
    h('circle', { cx: "6.5", cy: "7.5", r: "1.5", fill: "none" })
  );
});

export default NibTags;
