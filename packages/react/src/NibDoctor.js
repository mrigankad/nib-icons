import { createElement as h, forwardRef } from 'react';

export const NibDoctor = forwardRef(function NibDoctor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "7", r: "4", fill: "none" }),
    h('path', { d: "M4 21a8 8 0 0 1 16 0M9 14v3a2 2 0 0 0 4 0M15 14v2", fill: "none" }),
    h('circle', { cx: "15", cy: "17.5", r: "1.5", fill: "none" })
  );
});

export default NibDoctor;
