import { createElement as h, forwardRef } from 'react';

export const NibAppGrid = forwardRef(function NibAppGrid({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "3", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "17", y: "3", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "3", y: "10", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "10", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "17", y: "10", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "3", y: "17", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "10", y: "17", width: "4", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "17", y: "17", width: "4", height: "4", rx: "1", fill: "none" })
  );
});

export default NibAppGrid;
