import { createElement as h, forwardRef } from 'react';

export const NibTripod = forwardRef(function NibTripod({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "2", width: "10", height: "6", rx: "1.5", fill: "none" }),
    h('path', { d: "M12 8v5M12 13l-6 9M12 13l6 9M12 13v9", fill: "none" })
  );
});

export default NibTripod;
