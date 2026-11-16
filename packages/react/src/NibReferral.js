import { createElement as h, forwardRef } from 'react';

export const NibReferral = forwardRef(function NibReferral({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "5", cy: "7", r: "2.5", fill: "none" }),
    h('circle', { cx: "19", cy: "17", r: "2.5", fill: "none" }),
    h('path', { d: "M1 15a4 4 0 0 1 8 0M15 23a4 4 0 0 1 8 0M10 7h6a2 2 0 0 1 2 2v3M16 10l2 2 2-2", fill: "none" })
  );
});

export default NibReferral;
