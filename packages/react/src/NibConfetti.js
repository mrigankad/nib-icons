import { createElement as h, forwardRef } from 'react';

export const NibConfetti = forwardRef(function NibConfetti({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4l2 1M10 3l-1 2M15 4l2 1M20 3l-1 2M3 10l2-1M8 9l1 2M13 10l2-1M18 9l1 2M4 16l2 1M10 15l-1 2M15 16l2 1M20 15l-1 2M6 21l1-1M12 20l1 1M18 21l1-1", fill: "none" })
  );
});

export default NibConfetti;
