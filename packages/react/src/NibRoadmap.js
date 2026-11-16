import { createElement as h, forwardRef } from 'react';

export const NibRoadmap = forwardRef(function NibRoadmap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5.2 19C6 16 8 15 8.6 14.7M11.4 13.3C14 12 16 10.5 16 8V4", fill: "none" }),
    h('circle', { cx: "4", cy: "20", r: "1.5", fill: "none" }),
    h('circle', { cx: "10", cy: "14", r: "1.5", fill: "none" }),
    h('path', { d: "M16 4h5l-1.5 1.5L21 7h-5", fill: "none" })
  );
});

export default NibRoadmap;
