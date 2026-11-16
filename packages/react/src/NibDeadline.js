import { createElement as h, forwardRef } from 'react';

export const NibDeadline = forwardRef(function NibDeadline({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "14", r: "7", fill: "none" }),
    h('path', { d: "M10 10.5V14l2 1.5M17 3v7.5M17 3h4l-1 2 1 2h-4", fill: "none" })
  );
});

export default NibDeadline;
