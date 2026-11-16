import { createElement as h, forwardRef } from 'react';

export const NibAnchorPoint = forwardRef(function NibAnchorPoint({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "9", width: "6", height: "6", rx: "1", fill: "none" }),
    h('path', { d: "M4 12h5M15 12h5", fill: "none" }),
    h('circle', { cx: "3", cy: "12", r: "1", fill: "none" }),
    h('circle', { cx: "21", cy: "12", r: "1", fill: "none" })
  );
});

export default NibAnchorPoint;
