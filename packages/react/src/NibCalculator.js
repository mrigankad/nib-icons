import { createElement as h, forwardRef } from 'react';

export const NibCalculator = forwardRef(function NibCalculator({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none" }),
    h('rect', { x: "8", y: "5", width: "8", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01", fill: "none" })
  );
});

export default NibCalculator;
