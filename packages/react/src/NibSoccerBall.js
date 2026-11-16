import { createElement as h, forwardRef } from 'react';

export const NibSoccerBall = forwardRef(function NibSoccerBall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M12 8l3 2.2-1.2 3.6h-3.6L9 10.2zM12 8V3.5M15 10.2l4.5-1.5M13.8 13.8l2.7 4M10.2 13.8l-2.7 4M9 10.2L4.5 8.7", fill: "none" })
  );
});

export default NibSoccerBall;
