import { createElement as h, forwardRef } from 'react';

export const NibShelfHome = forwardRef(function NibShelfHome({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11h18M3 20h18M5 11v2M19 11v2M5 20v2M19 20v2M5 11V5h2v6M8 11V6h2v5M14 10.5a2 2 0 1 1 3.5-1.5M15 20v-4h4v4M7 20l2-5 1.5.5-2 4.5", fill: "none" })
  );
});

export default NibShelfHome;
