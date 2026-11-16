import { createElement as h, forwardRef } from 'react';

export const NibWifiLock = forwardRef(function NibWifiLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 8-3.9M8.5 15.5A5 5 0 0 1 12 14M16.5 16v-1.5a1.5 1.5 0 0 1 3 0V16", fill: "none" }),
    h('rect', { x: "15", y: "16", width: "6", height: "5", rx: "1", fill: "none" })
  );
});

export default NibWifiLock;
