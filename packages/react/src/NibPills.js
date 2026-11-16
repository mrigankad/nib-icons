import { createElement as h, forwardRef } from 'react';

export const NibPills = forwardRef(function NibPills({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2.500", y: "5.250", width: "11", height: "5.500", rx: "2.750", transform: "rotate(45 8 8)", fill: "none" }),
    h('path', { d: "M5.500 8.500 10.500 5.500", fill: "none" }),
    h('circle', { cx: "16.500", cy: "16.500", r: "4.500", fill: "none" }),
    h('path', { d: "M13.500 16.500h6", fill: "none" })
  );
});

export default NibPills;
