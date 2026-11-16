import { createElement as h, forwardRef } from 'react';

export const NibShubhLabh = forwardRef(function NibShubhLabh({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 10h6M9.5 10c-3 1.5-4 4-4 6a6.5 6.5 0 0 0 13 0c0-2-1-4.5-4-6M7 16h10", fill: "none" }),
    h('circle', { cx: "12", cy: "6.5", r: "2", fill: "none" }),
    h('path', { d: "M10.5 8C8.5 7.5 7 6 6.5 4M13.5 8c2-.5 3.5-2 4-4", fill: "none" }),
    h('path', { d: "M3 12h.01M21 12h.01M3 15h.01M21 15h.01", fill: "none", strokeWidth: "2.2" })
  );
});

export default NibShubhLabh;
