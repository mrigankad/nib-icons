import { createElement as h, forwardRef } from 'react';

export const NibRoute = forwardRef(function NibRoute({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "19", r: "2.5", fill: "none" }),
    h('circle', { cx: "18", cy: "5", r: "2.5", fill: "none" }),
    h('path', { d: "M8.5 19H16a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h7.5", fill: "none" })
  );
});

export default NibRoute;
