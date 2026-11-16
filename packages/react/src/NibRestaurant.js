import { createElement as h, forwardRef } from 'react';

export const NibRestaurant = forwardRef(function NibRestaurant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "9", fill: "none" }),
    h('path', { d: "M8.5 7v4a1.5 1.5 0 0 0 3 0V7M10 7v10M15.5 17V7c-1 1-1.5 2-1.5 4v1h1.5", fill: "none" })
  );
});

export default NibRestaurant;
