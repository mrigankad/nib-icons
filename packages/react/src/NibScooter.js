import { createElement as h, forwardRef } from 'react';

export const NibScooter = forwardRef(function NibScooter({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "17", r: "2.5", fill: "none" }),
    h('circle', { cx: "19", cy: "17", r: "2.5", fill: "none" }),
    h('path', { d: "M7.5 17h7l2-7-2-5h3M5 14.5V12h7", fill: "none" })
  );
});

export default NibScooter;
