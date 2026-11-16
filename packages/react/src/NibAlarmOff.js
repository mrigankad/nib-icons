import { createElement as h, forwardRef } from 'react';

export const NibAlarmOff = forwardRef(function NibAlarmOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6.3 7.3A8 8 0 0 0 17.7 18.7M19.6 15.6A8 8 0 0 0 9.4 5.4M5 3L2 6M19 3l3 3M3 3l18 18", fill: "none" })
  );
});

export default NibAlarmOff;
