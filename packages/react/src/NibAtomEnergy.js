import { createElement as h, forwardRef } from 'react';

export const NibAtomEnergy = forwardRef(function NibAtomEnergy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "12", r: "1.5", fill: "none" }),
    h('ellipse', { cx: "12", cy: "12", rx: "10", ry: "4", fill: "none" }),
    h('ellipse', { cx: "12", cy: "12", rx: "10", ry: "4", transform: "rotate(60 12 12)", fill: "none" }),
    h('path', { d: "M19 2l-1.5 3h2L18 8", fill: "none" })
  );
});

export default NibAtomEnergy;
