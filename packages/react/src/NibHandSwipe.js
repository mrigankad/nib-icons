import { createElement as h, forwardRef } from 'react';

export const NibHandSwipe = forwardRef(function NibHandSwipe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 14V7.5a1.5 1.5 0 0 1 3 0V12M13 11.5a1.5 1.5 0 0 1 3 0V13M16 12a1.5 1.5 0 0 1 3 0v1M19 13a1.5 1.5 0 0 1 3 0v2.5a5.5 5.5 0 0 1-5.5 5.5H15a5 5 0 0 1-4.2-2.3L8.2 16a1.4 1.4 0 0 1 2.3-1.6l.5.6M2 4h7M4.5 1.5L2 4l2.5 2.5", fill: "none" })
  );
});

export default NibHandSwipe;
