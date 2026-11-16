import { createElement as h, forwardRef } from 'react';

export const NibExposure = forwardRef(function NibExposure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "2", fill: "none" }),
    h('path', { d: "M3.5 20.5l17-17M6 8.5h4.5M8.25 6.25v4.5M13.5 16h4.5", fill: "none" })
  );
});

export default NibExposure;
