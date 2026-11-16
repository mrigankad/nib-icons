import { createElement as h, forwardRef } from 'react';

export const NibBlockchain = forwardRef(function NibBlockchain({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "2", width: "7", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "2", width: "7", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "2", y: "15", width: "7", height: "7", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "15", width: "7", height: "7", rx: "1", fill: "none" }),
    h('path', { d: "M9 5.5h6M18.5 9v6M15 18.5H9M5.5 15V9", fill: "none" })
  );
});

export default NibBlockchain;
