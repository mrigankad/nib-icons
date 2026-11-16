import { createElement as h, forwardRef } from 'react';

export const NibWifiOff = forwardRef(function NibWifiOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8.5a15 15 0 0 1 4.5-2.8M10.7 5A15 15 0 0 1 22 8.5M5 12a10 10 0 0 1 4.2-2.4M16.5 10.5A10 10 0 0 1 19 12M8.5 15.5a5 5 0 0 1 7 0M12 19h.01M3 3l18 18", fill: "none" })
  );
});

export default NibWifiOff;
