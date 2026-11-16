import { createElement as h, forwardRef } from 'react';

export const NibSwatch = forwardRef(function NibSwatch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v13.5a3.5 3.5 0 0 1-7 0zM10 8l4.5-2.5a1 1 0 0 1 1.4.4l2.6 4.5a1 1 0 0 1-.4 1.4L9 17M13 21h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.5", fill: "none" }),
    h('circle', { cx: "6.5", cy: "17.5", r: ".8", fill: "none" })
  );
});

export default NibSwatch;
