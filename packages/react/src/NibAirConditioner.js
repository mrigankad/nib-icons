import { createElement as h, forwardRef } from 'react';

export const NibAirConditioner = forwardRef(function NibAirConditioner({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "8", rx: "2", fill: "none" }),
    h('path', { d: "M5 10h14M7 15c0 2-1 3-1 5M12 15v5M17 15c0 2 1 3 1 5", fill: "none" })
  );
});

export default NibAirConditioner;
