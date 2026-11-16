import { createElement as h, forwardRef } from 'react';

export const NibAnniversary = forwardRef(function NibAnniversary({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "15", r: "5", fill: "none" }),
    h('circle', { cx: "15", cy: "15", r: "5", fill: "none" }),
    h('path', { d: "M9 10L7.5 7.5 9 5.5l1.5 2z", fill: "none" })
  );
});

export default NibAnniversary;
