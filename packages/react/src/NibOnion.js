import { createElement as h, forwardRef } from 'react';

export const NibOnion = forwardRef(function NibOnion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 6c-4 2-7 5-7 9a7 7 0 0 0 14 0c0-4-3-7-7-9zM12 6V2M12 6c-2 3-3 6-3 9s1 5 3 6M12 6c2 3 3 6 3 9s-1 5-3 6M10 22l-1 1M14 22l1 1", fill: "none" })
  );
});

export default NibOnion;
