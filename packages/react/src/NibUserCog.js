import { createElement as h, forwardRef } from 'react';

export const NibUserCog = forwardRef(function NibUserCog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "8", r: "4", fill: "none" }),
    h('path', { d: "M3 20a7 7 0 0 1 9.5-6.5M18 14v1.5M18 19.5V21M14.5 17.5H16M20 17.5h1.5", fill: "none" }),
    h('circle', { cx: "18", cy: "17.5", r: "2", fill: "none" })
  );
});

export default NibUserCog;
