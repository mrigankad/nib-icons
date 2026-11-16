import { createElement as h, forwardRef } from 'react';

export const NibCameraMovie = forwardRef(function NibCameraMovie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "9", width: "13", height: "10", rx: "2", fill: "none" }),
    h('circle', { cx: "5.5", cy: "5.5", r: "2.5", fill: "none" }),
    h('circle', { cx: "11.5", cy: "5.5", r: "2.5", fill: "none" }),
    h('path', { d: "M15 12l6-3v10l-6-3", fill: "none" })
  );
});

export default NibCameraMovie;
