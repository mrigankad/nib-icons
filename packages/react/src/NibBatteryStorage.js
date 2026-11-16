import { createElement as h, forwardRef } from 'react';

export const NibBatteryStorage = forwardRef(function NibBatteryStorage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "5", width: "8", height: "16", rx: "1", fill: "none" }),
    h('rect', { x: "13", y: "5", width: "8", height: "16", rx: "1", fill: "none" }),
    h('path', { d: "M6 3h2M16 3h2M7 9l-1 3h2l-1 3M17 9l-1 3h2l-1 3", fill: "none" })
  );
});

export default NibBatteryStorage;
