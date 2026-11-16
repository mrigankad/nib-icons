import { createElement as h, forwardRef } from 'react';

export const NibMedalSport = forwardRef(function NibMedalSport({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2l2 7M16 2l-2 7M7 2h3M14 2h3", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "6", fill: "none" }),
    h('path', { d: "M11 13l1.5-1V18", fill: "none" })
  );
});

export default NibMedalSport;
