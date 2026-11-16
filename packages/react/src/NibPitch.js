import { createElement as h, forwardRef } from 'react';

export const NibPitch = forwardRef(function NibPitch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "7", r: "2", fill: "none" }),
    h('path', { d: "M2 21v-6a3 3 0 0 1 6 0l3-3M10 3h12v11H10M14 10l2-2 2 1.5 2-3", fill: "none" })
  );
});

export default NibPitch;
