import { createElement as h, forwardRef } from 'react';

export const NibPanda = forwardRef(function NibPanda({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "6", cy: "6", r: "2.5", fill: "currentColor" }),
    h('circle', { cx: "18", cy: "6", r: "2.5", fill: "currentColor" }),
    h('circle', { cx: "12", cy: "13", r: "8", fill: "none" }),
    h('ellipse', { cx: "9", cy: "12", rx: "1.6", ry: "2.2", transform: "rotate(-25 9 12)", fill: "none" }),
    h('ellipse', { cx: "15", cy: "12", rx: "1.6", ry: "2.2", transform: "rotate(25 15 12)", fill: "none" }),
    h('path', { d: "M11 16h2l-1 1z", fill: "none" })
  );
});

export default NibPanda;
