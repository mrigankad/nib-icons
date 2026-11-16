import { createElement as h, forwardRef } from 'react';

export const NibStock = forwardRef(function NibStock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4v16M12 2v20M18 6v14", fill: "none" }),
    h('rect', { x: "4.5", y: "8", width: "3", height: "7", rx: ".5", fill: "none" }),
    h('rect', { x: "10.5", y: "5", width: "3", height: "9", rx: ".5", fill: "none" }),
    h('rect', { x: "16.5", y: "10", width: "3", height: "6", rx: ".5", fill: "none" })
  );
});

export default NibStock;
