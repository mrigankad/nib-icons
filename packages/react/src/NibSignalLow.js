import { createElement as h, forwardRef } from 'react';

export const NibSignalLow = forwardRef(function NibSignalLow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20v-3M9 20v-7", fill: "none" }),
    h('path', { d: "M14 20V9M19 20V4", fill: "none", strokeDasharray: "1 2.5" })
  );
});

export default NibSignalLow;
