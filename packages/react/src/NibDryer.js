import { createElement as h, forwardRef } from 'react';

export const NibDryer = forwardRef(function NibDryer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "2", width: "18", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M3 7h18M17 4.5h.01M14 4.5h.01", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "5", fill: "none" }),
    h('circle', { cx: "12", cy: "14", r: "2", fill: "none" })
  );
});

export default NibDryer;
