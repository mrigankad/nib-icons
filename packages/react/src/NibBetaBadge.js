import { createElement as h, forwardRef } from 'react';

export const NibBetaBadge = forwardRef(function NibBetaBadge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "2", y: "7", width: "20", height: "10", rx: "5", fill: "none" }),
    h('path', { d: "M10.5 15.5V10a1.5 1.5 0 0 1 3 0 1.4 1.4 0 0 1-1.2 1.4 1.6 1.6 0 1 1-1.8 2.7", fill: "none" })
  );
});

export default NibBetaBadge;
