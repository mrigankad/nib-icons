import { createElement as h, forwardRef } from 'react';

export const NibUvIndex = forwardRef(function NibUvIndex({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 9a6 6 0 0 1 12 0M12 1v1.5M3.5 5l1 1M20.5 5l-1 1M5 14v4a2 2 0 0 0 4 0v-4M13 14l2 6 2-6", fill: "none" })
  );
});

export default NibUvIndex;
