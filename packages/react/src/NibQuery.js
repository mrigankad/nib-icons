import { createElement as h, forwardRef } from 'react';

export const NibQuery = forwardRef(function NibQuery({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "10", cy: "5", rx: "7", ry: "2.5", fill: "none" }),
    h('path', { d: "M3 5v12c0 1.4 3.1 2.5 7 2.5M17 5v4M3 11c0 1.4 3.1 2.5 7 2.5", fill: "none" }),
    h('circle', { cx: "17", cy: "16", r: "3", fill: "none" }),
    h('path', { d: "M19.2 18.2L21.5 20.5", fill: "none" })
  );
});

export default NibQuery;
