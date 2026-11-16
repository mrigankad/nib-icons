import { createElement as h, forwardRef } from 'react';

export const NibMoneyTransfer = forwardRef(function NibMoneyTransfer({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "3", width: "12", height: "8", rx: "1.5", fill: "none" }),
    h('rect', { x: "10", y: "13", width: "12", height: "8", rx: "1.5", fill: "none" }),
    h('path', { d: "M17 6h3v3.5M18.5 8l1.5 1.5L21.5 8M7 18H4v-3.5M5.5 16L4 14.5 2.5 16", fill: "none" })
  );
});

export default NibMoneyTransfer;
