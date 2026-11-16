import { createElement as h, forwardRef } from 'react';

export const NibDatabasePlus = forwardRef(function NibDatabasePlus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('ellipse', { cx: "12", cy: "5", rx: "8", ry: "3", fill: "none" }),
    h('path', { d: "M4 5v14c0 1.7 3.6 3 8 3M20 5v7M4 12c0 1.7 3.6 3 8 3M19 15v6M16 18h6", fill: "none" })
  );
});

export default NibDatabasePlus;
