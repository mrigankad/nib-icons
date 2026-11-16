import { createElement as h, forwardRef } from 'react';

export const NibSnowboard = forwardRef(function NibSnowboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M11 7l-1 6 3 2 1 3M10 13l-2 3M6 9l5-1 5 2M3 19l18-2", fill: "none" })
  );
});

export default NibSnowboard;
