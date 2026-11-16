import { createElement as h, forwardRef } from 'react';

export const NibShocked = forwardRef(function NibShocked({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "10", fill: "none" }),
    h('circle', { cx: "9", cy: "9.5", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "9.5", r: "1.5", fill: "none" }),
    h('rect', { x: "10", y: "13.5", width: "4", height: "4.5", rx: "2", fill: "none" })
  );
});

export default NibShocked;
