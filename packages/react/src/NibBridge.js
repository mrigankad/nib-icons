import { createElement as h, forwardRef } from 'react';

export const NibBridge = forwardRef(function NibBridge({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 15h20M6 5v15M18 5v15", fill: "none" }),
    h('path', { d: "M2 12c2.500 0 4-3 4-7 1 4 3 6 6 6s5-2 6-6c0 4 1.500 7 4 7", fill: "none" }),
    h('path', { d: "M9 11v4M15 11v4", fill: "none" })
  );
});

export default NibBridge;
