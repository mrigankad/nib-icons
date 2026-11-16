import { createElement as h, forwardRef } from 'react';

export const NibPersonWheelchair = forwardRef(function NibPersonWheelchair({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "10", cy: "4", r: "2", fill: "none" }),
    h('path', { d: "M10 7.5V14h5.5l2.5 5.5M10 10.5h5M6.5 11.5a5.5 5.5 0 1 0 8 6.5", fill: "none" })
  );
});

export default NibPersonWheelchair;
