import { createElement as h, forwardRef } from 'react';

export const NibAlarmSiren = forwardRef(function NibAlarmSiren({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 18v-6a5 5 0 0 1 10 0v6M5 18h14v3H5zM12 3V2M4.5 6.5l-1-1M19.5 6.5l1-1M10 12a2 2 0 0 1 2-2", fill: "none" })
  );
});

export default NibAlarmSiren;
