import { createElement as h, forwardRef } from 'react';

export const NibMoneyReceive = forwardRef(function NibMoneyReceive({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "9", width: "14", height: "10", rx: "2", fill: "none" }),
    h('circle', { cx: "9", cy: "14", r: "2", fill: "none" }),
    h('path', { d: "M22 5h-7M18 2l-3 3 3 3", fill: "none" })
  );
});

export default NibMoneyReceive;
