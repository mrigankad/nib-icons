import { createElement as h, forwardRef } from 'react';

export const NibVault = forwardRef(function NibVault({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "4", width: "20", height: "16", rx: "2", fill: "none" }),
    h('circle', { cx: "13", cy: "12", r: "4.5", fill: "none" }),
    h('circle', { cx: "13", cy: "12", r: "1.5", fill: "none" }),
    h('path', { d: "M5.5 9v6", fill: "none" })
  );
});

export default NibVault;
