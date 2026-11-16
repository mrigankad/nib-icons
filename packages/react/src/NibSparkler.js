import { createElement as h, forwardRef } from 'react';

export const NibSparkler = forwardRef(function NibSparkler({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l10-10M15 9l-1-4M15 9l4-1M15 9l3 3M15 9l-3-3M17 4l1-2M20 6l2-1M20 11l2 1M11 4l-1-2", fill: "none" })
  );
});

export default NibSparkler;
