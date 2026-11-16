import { createElement as h, forwardRef } from 'react';

export const NibAnt = forwardRef(function NibAnt({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "12", cy: "6", r: "2", fill: "none" }),
    h('ellipse', { cx: "12", cy: "11", rx: "1.8", ry: "2.2", fill: "none" }),
    h('ellipse', { cx: "12", cy: "17.5", rx: "3", ry: "3.8", fill: "none" }),
    h('path', { d: "M11 4L9 2M13 4l2-2M10.5 10L6 8M13.5 10L18 8M10.5 12L6 14M13.5 12l4.5 2M10 15l-4 3M14 15l4 3", fill: "none" })
  );
});

export default NibAnt;
