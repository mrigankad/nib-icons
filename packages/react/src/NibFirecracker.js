import { createElement as h, forwardRef } from 'react';

export const NibFirecracker = forwardRef(function NibFirecracker({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "9", width: "10", height: "13", rx: "1", fill: "none" }),
    h('path', { d: "M7 13h10M7 18h10M12 9V6c0-2 2-2 3-3M16 2l1-1M18 4h2M17 6l1.5 1", fill: "none" })
  );
});

export default NibFirecracker;
