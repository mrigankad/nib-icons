import { createElement as h, forwardRef } from 'react';

export const NibSailboat = forwardRef(function NibSailboat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v14M12 3l7 11h-7M12 6l-6 8h6M3 16h18l-3 4H6zM2 22c2-1 3 1 5 0", fill: "none" })
  );
});

export default NibSailboat;
