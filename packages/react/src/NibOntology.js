import { createElement as h, forwardRef } from 'react';

export const NibOntology = forwardRef(function NibOntology({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "9", y: "2", width: "6", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "2", y: "11", width: "6", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "16", y: "11", width: "6", height: "4", rx: "1", fill: "none" }),
    h('rect', { x: "9", y: "18", width: "6", height: "4", rx: "1", fill: "none" }),
    h('path', { d: "M12 6v3M5 11V9h14v2M5 15v1h14v-1M12 16v2", fill: "none" })
  );
});

export default NibOntology;
