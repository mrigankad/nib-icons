import { createElement as h, forwardRef } from 'react';

export const NibPersonHug = forwardRef(function NibPersonHug({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "6.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "16", cy: "6.5", r: "2.5", fill: "none" }),
    h('path', { d: "M4 21v-5a4 4 0 0 1 4-4h5M20 21v-5a4 4 0 0 0-4-4h-5", fill: "none" })
  );
});

export default NibPersonHug;
