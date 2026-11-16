import { createElement as h, forwardRef } from 'react';

export const NibBread = forwardRef(function NibBread({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 11a3 3 0 0 1 0-6h14a3 3 0 0 1 0 6v9H5z", fill: "none" }),
    h('path', { d: "M9 14v3M12 13v4M15 14v3", fill: "none" })
  );
});

export default NibBread;
