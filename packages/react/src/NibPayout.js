import { createElement as h, forwardRef } from 'react';

export const NibPayout = forwardRef(function NibPayout({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "20", height: "10", rx: "2", fill: "none" }),
    h('circle', { cx: "12", cy: "8", r: "2", fill: "none" }),
    h('path', { d: "M12 16v6M9 19l3 3 3-3", fill: "none" })
  );
});

export default NibPayout;
