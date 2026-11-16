import { createElement as h, forwardRef } from 'react';

export const NibIdBadge = forwardRef(function NibIdBadge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "4", width: "14", height: "17", rx: "2", fill: "none" }),
    h('path', { d: "M10 4V2h4v2M8.5 17.5a3.5 3.5 0 0 1 7 0", fill: "none" }),
    h('circle', { cx: "12", cy: "11", r: "2.5", fill: "none" })
  );
});

export default NibIdBadge;
