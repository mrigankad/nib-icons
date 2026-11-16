import { createElement as h, forwardRef } from 'react';

export const NibProtractor = forwardRef(function NibProtractor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 18a10 10 0 0 1 20 0zM6 18a6 6 0 0 1 12 0M12 8v2M7 10l1 1M17 10l-1 1M12 18l3-4", fill: "none" })
  );
});

export default NibProtractor;
