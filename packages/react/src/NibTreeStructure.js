import { createElement as h, forwardRef } from 'react';

export const NibTreeStructure = forwardRef(function NibTreeStructure({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "3", y: "3", width: "6", height: "5", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "10", width: "6", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "15", y: "17", width: "6", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M6 8v9a2 2 0 0 0 2 2h7M6 12h9", fill: "none" })
  );
});

export default NibTreeStructure;
