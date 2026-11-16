import { createElement as h, forwardRef } from 'react';

export const NibCricketBall = forwardRef(function NibCricketBall({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M6 5.5c3 3 3 10 0 13M18 5.5c-3 3-3 10 0 13M7.5 9h1M7.5 12h1.5M7.5 15h1M15.5 9h1M15 12h1.5M15.5 15h1", fill: "none" })
  );
});

export default NibCricketBall;
