import { createElement as h, forwardRef } from 'react';

export const NibPerfume = forwardRef(function NibPerfume({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "9", width: "14", height: "13", rx: "3", fill: "none" }),
    h('path', { d: "M10 9V6h4v3M12 6V3M9 3h3M17 3h.01M19 5h.01M19 2h.01", fill: "none" })
  );
});

export default NibPerfume;
