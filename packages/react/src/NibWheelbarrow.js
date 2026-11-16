import { createElement as h, forwardRef } from 'react';

export const NibWheelbarrow = forwardRef(function NibWheelbarrow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8h14l-3 7H6zM16 8l6-2M13 15l3 3M6 15l-2 4", fill: "none" }),
    h('circle', { cx: "17", cy: "19", r: "2", fill: "none" })
  );
});

export default NibWheelbarrow;
