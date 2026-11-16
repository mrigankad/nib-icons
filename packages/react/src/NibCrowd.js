import { createElement as h, forwardRef } from 'react';

export const NibCrowd = forwardRef(function NibCrowd({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5.5", cy: "9", r: "2.5", fill: "none" }),
    h('path', { d: "M2.5 18.5a3.5 3.5 0 0 1 3.5-3.5", fill: "none" }),
    h('circle', { cx: "18.5", cy: "9", r: "2.5", fill: "none" }),
    h('path', { d: "M21.5 18.5a3.5 3.5 0 0 0-3.5-3.5", fill: "none" }),
    h('circle', { cx: "12", cy: "8", r: "3.2", fill: "none" }),
    h('path', { d: "M6.5 21v-2a5.5 5.5 0 0 1 11 0v2z", fill: "none" })
  );
});

export default NibCrowd;
