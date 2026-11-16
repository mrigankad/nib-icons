import { createElement as h, forwardRef } from 'react';

export const NibContactCard = forwardRef(function NibContactCard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('circle', { cx: "8.5", cy: "10.5", r: "2.5", fill: "none" }),
    h('path', { d: "M5 16.5a3.5 3.5 0 0 1 7 0M15 10h4M15 14h3", fill: "none" })
  );
});

export default NibContactCard;
