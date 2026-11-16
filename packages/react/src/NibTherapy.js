import { createElement as h, forwardRef } from 'react';

export const NibTherapy = forwardRef(function NibTherapy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "8", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "8", r: "2.5", fill: "none" }),
    h('path', { d: "M2 20a4 4 0 0 1 8 0M14 20a4 4 0 0 1 8 0M10 4h4v3h-2l-1.5 1V7H10z", fill: "none" })
  );
});

export default NibTherapy;
