import { createElement as h, forwardRef } from 'react';

export const NibHandTap = forwardRef(function NibHandTap({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 14V8a1.5 1.5 0 0 1 3 0v4M12 11.5a1.5 1.5 0 0 1 3 0V13M15 12a1.5 1.5 0 0 1 3 0v1M18 13a1.5 1.5 0 0 1 3 0v2.5a5.5 5.5 0 0 1-5.5 5.5H14a5 5 0 0 1-4.2-2.3L7.2 16a1.4 1.4 0 0 1 2.3-1.6l.5.6M6 6a4.5 4.5 0 0 1 9 0", fill: "none" })
  );
});

export default NibHandTap;
