import { createElement as h, forwardRef } from 'react';

export const NibOilBarrel = forwardRef(function NibOilBarrel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('path', { d: "M5 8h14M5 16h14M12 10c-1 1.2-1.5 2-1.5 2.8a1.5 1.5 0 0 0 3 0c0-.8-.5-1.6-1.5-2.8z", fill: "none" })
  );
});

export default NibOilBarrel;
