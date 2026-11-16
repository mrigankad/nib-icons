import { createElement as h, forwardRef } from 'react';

export const NibDeliveryBox = forwardRef(function NibDeliveryBox({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "7", width: "18", height: "14", rx: "1.5", fill: "none" }),
    h('path', { d: "M3 11h18M10 7V3h4v4M9 16h6", fill: "none" })
  );
});

export default NibDeliveryBox;
