import { createElement as h, forwardRef } from 'react';

export const NibCalculatorSchool = forwardRef(function NibCalculatorSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none" }),
    h('rect', { x: "7", y: "5", width: "10", height: "4", rx: ".5", fill: "none" }),
    h('path', { d: "M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01", fill: "none" })
  );
});

export default NibCalculatorSchool;
