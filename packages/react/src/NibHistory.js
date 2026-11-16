import { createElement as h, forwardRef } from 'react';

export const NibHistory = forwardRef(function NibHistory({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3.5 12A8.5 8.5 0 1 0 6 6M6 2.5V6H2.5M12 8v4l2.5 1.5", fill: "none" })
  );
});

export default NibHistory;
