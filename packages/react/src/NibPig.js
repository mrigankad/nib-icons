import { createElement as h, forwardRef } from 'react';

export const NibPig = forwardRef(function NibPig({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 6L4 3l4 2M18 6l2-3-4 2", fill: "none" }),
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('ellipse', { cx: "12", cy: "15", rx: "3", ry: "2", fill: "none" }),
    h('path', { d: "M11 15h.01M13 15h.01M9 10.5h.01M15 10.5h.01", fill: "none" })
  );
});

export default NibPig;
