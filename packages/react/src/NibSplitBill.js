import { createElement as h, forwardRef } from 'react';

export const NibSplitBill = forwardRef(function NibSplitBill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h14v18l-2.3-1.5-2.4 1.5-2.3-1.5-2.3 1.5-2.4-1.5L5 21zM12 6v11", fill: "none" }),
    h('path', { d: "M8 9h1.5M8 12h1.5M14.5 9H16M14.5 12H16", fill: "none" })
  );
});

export default NibSplitBill;
