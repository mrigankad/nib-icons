import { createElement as h, forwardRef } from 'react';

export const NibCricketBat = forwardRef(function NibCricketBat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 10l7-7M18 3l3 3M14 10L4 20a1.5 1.5 0 0 1-2-2l10-10z", fill: "none" }),
    h('circle', { cx: "18", cy: "17", r: "2.5", fill: "none" })
  );
});

export default NibCricketBat;
