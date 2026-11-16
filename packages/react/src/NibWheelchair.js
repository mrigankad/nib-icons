import { createElement as h, forwardRef } from 'react';

export const NibWheelchair = forwardRef(function NibWheelchair({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "9", cy: "3.5", r: "1.5", fill: "none" }),
    h('path', { d: "M9 7v6h6l3 6h2M9 10h5M7 10.5a5.5 5.5 0 1 0 7.5 7", fill: "none" })
  );
});

export default NibWheelchair;
