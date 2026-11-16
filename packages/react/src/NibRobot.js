import { createElement as h, forwardRef } from 'react';

export const NibRobot = forwardRef(function NibRobot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "8", width: "16", height: "12", rx: "3", fill: "none" }),
    h('path', { d: "M12 8V4M2 13v3M22 13v3M9 16h6", fill: "none" }),
    h('circle', { cx: "12", cy: "3", r: "1", fill: "none" }),
    h('circle', { cx: "9", cy: "12.5", r: "1", fill: "none" }),
    h('circle', { cx: "15", cy: "12.5", r: "1", fill: "none" })
  );
});

export default NibRobot;
