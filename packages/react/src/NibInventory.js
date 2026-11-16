import { createElement as h, forwardRef } from 'react';

export const NibInventory = forwardRef(function NibInventory({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 3v18M21 3v18M3 12h18M3 21h18", fill: "none" }),
    h('rect', { x: "5.5", y: "6.5", width: "5", height: "5.5", rx: ".5", fill: "none" }),
    h('rect', { x: "12.5", y: "8.5", width: "5", height: "3.5", rx: ".5", fill: "none" }),
    h('rect', { x: "6", y: "15", width: "7", height: "6", rx: ".5", fill: "none" })
  );
});

export default NibInventory;
