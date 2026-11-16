import { createElement as h, forwardRef } from 'react';

export const NibVaccine = forwardRef(function NibVaccine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "7", y: "7", width: "10", height: "13", rx: "2", fill: "none" }),
    h('path', { d: "M8 3h8v4H8zM7 12h10M12 14v4M10 16h4", fill: "none" })
  );
});

export default NibVaccine;
