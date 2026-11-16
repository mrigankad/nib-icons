import { createElement as h, forwardRef } from 'react';

export const NibLayoutMasonry = forwardRef(function NibLayoutMasonry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "8", height: "7", rx: "1.5", fill: "none" }),
    h('rect', { x: "13", y: "3", width: "8", height: "11", rx: "1.5", fill: "none" }),
    h('rect', { x: "3", y: "12", width: "8", height: "9", rx: "1.5", fill: "none" }),
    h('rect', { x: "13", y: "16", width: "8", height: "5", rx: "1.5", fill: "none" })
  );
});

export default NibLayoutMasonry;
