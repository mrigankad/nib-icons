import { createElement as h, forwardRef } from 'react';

export const NibPasskey = forwardRef(function NibPasskey({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "7", r: "4", fill: "none" }),
    h('path', { d: "M2 20a7 7 0 0 1 10-6.3M18 15.5V21M18 18.5h2", fill: "none" }),
    h('circle', { cx: "18", cy: "13", r: "2.5", fill: "none" })
  );
});

export default NibPasskey;
