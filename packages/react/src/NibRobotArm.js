import { createElement as h, forwardRef } from 'react';

export const NibRobotArm = forwardRef(function NibRobotArm({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21h10M6 21v-3h6v3M9 18V12l6-6M15 6l3 1M15 6l1-3M18 7l2 2M16 3l2-1", fill: "none" }),
    h('circle', { cx: "9", cy: "12", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "6", r: "1.5", fill: "none" })
  );
});

export default NibRobotArm;
