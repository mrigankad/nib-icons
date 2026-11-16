import { createElement as h, forwardRef } from 'react';

export const NibUserShield = forwardRef(function NibUserShield({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M3 20a7 7 0 0 1 9.5-6.5M18 14l3 1.2v2.3c0 2-1.4 3.1-3 3.7-1.6-.6-3-1.7-3-3.7v-2.3z", fill: "none" })
  );
});

export default NibUserShield;
