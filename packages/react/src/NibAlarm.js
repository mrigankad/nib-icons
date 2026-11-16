import { createElement as h, forwardRef } from 'react';

export const NibAlarm = forwardRef(function NibAlarm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('path', { d: "M12 9v4l2 2M5 3L2 6M19 3l3 3", fill: "none" })
  );
});

export default NibAlarm;
