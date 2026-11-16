import { createElement as h, forwardRef } from 'react';

export const NibAtm = forwardRef(function NibAtm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "9", rx: "1.5", fill: "none" }),
    h('path', { d: "M7 12v9h10v-9M9.5 15h5M7 7.5h10", fill: "none" })
  );
});

export default NibAtm;
