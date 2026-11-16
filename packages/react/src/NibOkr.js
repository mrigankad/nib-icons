import { createElement as h, forwardRef } from 'react';

export const NibOkr = forwardRef(function NibOkr({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "7", cy: "7", r: "4.5", fill: "none" }),
    h('circle', { cx: "7", cy: "7", r: "1.5", fill: "none" }),
    h('path', { d: "M14 5h7M14 9h5M3 15l1.5 1.5L7 14M10 15.5h11M3 20l1.5 1.5L7 19M10 20.5h8", fill: "none" })
  );
});

export default NibOkr;
