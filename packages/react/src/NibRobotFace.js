import { createElement as h, forwardRef } from 'react';

export const NibRobotFace = forwardRef(function NibRobotFace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "7", width: "16", height: "13", rx: "3", fill: "none" }),
    h('path', { d: "M12 7V4.5M9.5 16.5h5M2 12v3M22 12v3", fill: "none" }),
    h('circle', { cx: "12", cy: "3.5", r: "1", fill: "none" }),
    h('circle', { cx: "9", cy: "12", r: "1.5", fill: "none" }),
    h('circle', { cx: "15", cy: "12", r: "1.5", fill: "none" })
  );
});

export default NibRobotFace;
