import { createElement as h, forwardRef } from 'react';

export const NibMonitorOff = forwardRef(function NibMonitorOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7.5 4h13A1.5 1.5 0 0 1 22 5.5v10M18 17H3.5A1.5 1.5 0 0 1 2 15.5v-10A1.5 1.5 0 0 1 3 4.1M9 21l1-4h4l1 4M7 21h10M2 2l20 20", fill: "none" })
  );
});

export default NibMonitorOff;
