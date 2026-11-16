import { createElement as h, forwardRef } from 'react';

export const NibTipJar = forwardRef(function NibTipJar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h8M9 3v3c-2.5 1-4 3-4 6v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7c0-3-1.5-5-4-6V3", fill: "none" }),
    h('circle', { cx: "12", cy: "15", r: "2.5", fill: "none" })
  );
});

export default NibTipJar;
