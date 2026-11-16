import { createElement as h, forwardRef } from 'react';

export const NibFryingPan = forwardRef(function NibFryingPan({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "13", r: "7", fill: "none" }),
    h('path', { d: "M14 8l7-6", fill: "none" })
  );
});

export default NibFryingPan;
