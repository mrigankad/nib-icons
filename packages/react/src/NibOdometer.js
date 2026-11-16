import { createElement as h, forwardRef } from 'react';

export const NibOdometer = forwardRef(function NibOdometer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M7 7v10M12 7v10M17 7v10M4.5 11v2M9.5 10.5v3M14 11l1 0v2.5M19 11h.5v2.5", fill: "none" })
  );
});

export default NibOdometer;
