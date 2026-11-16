import { createElement as h, forwardRef } from 'react';

export const NibParking = forwardRef(function NibParking({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "18", height: "18", rx: "3", fill: "none" }),
    h('path', { d: "M9 17V7h4a3 3 0 0 1 0 6H9", fill: "none" })
  );
});

export default NibParking;
