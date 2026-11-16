import { createElement as h, forwardRef } from 'react';

export const NibWhistle = forwardRef(function NibWhistle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 10h8V6H9a7 7 0 1 0 7 7", fill: "none" }),
    h('circle', { cx: "9", cy: "13", r: "2", fill: "none" }),
    h('path', { d: "M5 3l1.5 2", fill: "none" })
  );
});

export default NibWhistle;
