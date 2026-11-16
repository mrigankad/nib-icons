import { createElement as h, forwardRef } from 'react';

export const NibInspection = forwardRef(function NibInspection({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "4", width: "12", height: "16", rx: "2", fill: "none" }),
    h('path', { d: "M8 2h4v3H8zM7 10h6M7 13h4", fill: "none" }),
    h('circle', { cx: "17", cy: "16", r: "3", fill: "none" }),
    h('path', { d: "M19 18l3 3", fill: "none" })
  );
});

export default NibInspection;
