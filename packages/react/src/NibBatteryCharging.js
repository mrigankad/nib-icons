import { createElement as h, forwardRef } from 'react';

export const NibBatteryCharging = forwardRef(function NibBatteryCharging({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "17", height: "10", rx: "2", fill: "none" }),
    h('path', { d: "M22 10.5v3M11.5 9.5l-2 2.5h3l-2 2.5", fill: "none" })
  );
});

export default NibBatteryCharging;
