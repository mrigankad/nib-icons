import { createElement as h, forwardRef } from 'react';

export const NibBenchmark = forwardRef(function NibBenchmark({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21h18M6 18v-5M11 18V8M16 18v-7", fill: "none" }),
    h('path', { d: "M3 10h18", fill: "none", strokeDasharray: "2 2" })
  );
});

export default NibBenchmark;
