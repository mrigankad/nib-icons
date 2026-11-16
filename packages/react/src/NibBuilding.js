import { createElement as h, forwardRef } from 'react';

export const NibBuilding = forwardRef(function NibBuilding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "5", y: "3", width: "14", height: "18", rx: "1", fill: "none" }),
    h('path', { d: "M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M15 15h.01M10.5 21v-4h3v4", fill: "none" })
  );
});

export default NibBuilding;
