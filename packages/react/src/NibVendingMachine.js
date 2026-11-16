import { createElement as h, forwardRef } from 'react';

export const NibVendingMachine = forwardRef(function NibVendingMachine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none" }),
    h('rect', { x: "7", y: "5", width: "7", height: "10", rx: "1", fill: "none" }),
    h('path', { d: "M17 6v2M17 11v1M7 18.5h7M17 18.5h.01M7 8.5h7M7 11.5h7", fill: "none" })
  );
});

export default NibVendingMachine;
