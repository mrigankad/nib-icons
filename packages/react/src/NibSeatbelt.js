import { createElement as h, forwardRef } from 'react';

export const NibSeatbelt = forwardRef(function NibSeatbelt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "5.500", r: "2.500", fill: "none" }),
    h('path', { d: "M5.500 21v-6a6.500 6.500 0 0 1 13 0v6", fill: "none" }),
    h('path', { d: "M8 11 17 20", fill: "none" }),
    h('path', { d: "M14.500 17.500h-2.500v2.500", fill: "none" })
  );
});

export default NibSeatbelt;
