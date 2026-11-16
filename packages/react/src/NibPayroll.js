import { createElement as h, forwardRef } from 'react';

export const NibPayroll = forwardRef(function NibPayroll({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "8", cy: "7", r: "3", fill: "none" }),
    h('path', { d: "M2 19a6 6 0 0 1 10-4.5", fill: "none" }),
    h('rect', { x: "13", y: "13", width: "9", height: "7", rx: "1", fill: "none" }),
    h('circle', { cx: "17.5", cy: "16.5", r: "1.2", fill: "none" })
  );
});

export default NibPayroll;
