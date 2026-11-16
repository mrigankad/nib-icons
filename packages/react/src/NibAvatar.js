import { createElement as h, forwardRef } from 'react';

export const NibAvatar = forwardRef(function NibAvatar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "6", fill: "none" }),
    h('path', { d: "M9 10h.01M15 10h.01M9 14.5a4 4 0 0 0 6 0", fill: "none" })
  );
});

export default NibAvatar;
