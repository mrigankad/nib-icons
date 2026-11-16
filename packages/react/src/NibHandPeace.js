import { createElement as h, forwardRef } from 'react';

export const NibHandPeace = forwardRef(function NibHandPeace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9.5 12L6.5 4.5a1.5 1.5 0 0 1 2.8-1L12 10M12 10l1.5-6.5a1.5 1.5 0 0 1 2.9.7L15 11M15 11.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5A5.5 5.5 0 0 1 6 15.5V13a1.5 1.5 0 0 1 3 0", fill: "none" })
  );
});

export default NibHandPeace;
