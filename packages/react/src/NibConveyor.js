import { createElement as h, forwardRef } from 'react';

export const NibConveyor = forwardRef(function NibConveyor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "13", width: "20", height: "6", rx: "3", fill: "none" }),
    h('circle', { cx: "5", cy: "16", r: "1", fill: "none" }),
    h('circle', { cx: "12", cy: "16", r: "1", fill: "none" }),
    h('circle', { cx: "19", cy: "16", r: "1", fill: "none" }),
    h('rect', { x: "6", y: "7", width: "5", height: "6", fill: "none" }),
    h('path', { d: "M15 9h4M17 7l2 2-2 2", fill: "none" })
  );
});

export default NibConveyor;
