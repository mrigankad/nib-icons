import { createElement as h, forwardRef } from 'react';

export const NibSmartwatch = forwardRef(function NibSmartwatch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('rect', { x: "6", y: "6", width: "12", height: "12", rx: "3", fill: "none" }),
    h('path', { d: "M9 6l.5-3h5l.5 3M9 18l.5 3h5l.5-3M9 12h1.5l1-2 1.5 4 1-2h1", fill: "none" })
  );
});

export default NibSmartwatch;
