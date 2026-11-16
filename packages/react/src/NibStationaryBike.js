import { createElement as h, forwardRef } from 'react';

export const NibStationaryBike = forwardRef(function NibStationaryBike({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('circle', { cx: "16", cy: "14", r: "3.5", fill: "none" }),
    h('path', { d: "M5 5h4M7 5l3 9h6M17 4l-1 10M15 4h4M3 21h18M6 21l4-7M19 21l-3-3.5", fill: "none" })
  );
});

export default NibStationaryBike;
