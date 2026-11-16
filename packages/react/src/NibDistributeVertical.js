import { createElement as h, forwardRef } from 'react';

export const NibDistributeVertical = forwardRef(function NibDistributeVertical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3h18M3 21h18", fill: "none" }),
    h('rect', { x: "7", y: "9.5", width: "10", height: "5", rx: "1", fill: "none" })
  );
});

export default NibDistributeVertical;
