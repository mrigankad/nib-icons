import { createElement as h, forwardRef } from 'react';

export const NibLayoutBoard = forwardRef(function NibLayoutBoard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('rect', { x: "5", y: "7", width: "4", height: "6", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "7", width: "4", height: "10", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "7", width: "4", height: "4", rx: "1", fill: "none" })
  );
});

export default NibLayoutBoard;
