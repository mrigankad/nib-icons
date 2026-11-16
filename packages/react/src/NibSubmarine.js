import { createElement as h, forwardRef } from 'react';

export const NibSubmarine = forwardRef(function NibSubmarine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 14a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4zM9 10V6h4v4M11 6V3h2M21 12l2-1v6l-2-1", fill: "none" }),
    h('circle', { cx: "8", cy: "14", r: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "1", fill: "none" }),
    h('circle', { cx: "16", cy: "14", r: "1", fill: "none" })
  );
});

export default NibSubmarine;
