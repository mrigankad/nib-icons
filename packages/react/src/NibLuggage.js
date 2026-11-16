import { createElement as h, forwardRef } from 'react';

export const NibLuggage = forwardRef(function NibLuggage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "6", width: "12", height: "14", rx: "2", fill: "none" }),
    h('path', { d: "M9 6V3h6v3M10 10v6M14 10v6M8 20v2M16 20v2", fill: "none" })
  );
});

export default NibLuggage;
