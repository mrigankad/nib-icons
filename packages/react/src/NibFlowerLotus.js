import { createElement as h, forwardRef } from 'react';

export const NibFlowerLotus = forwardRef(function NibFlowerLotus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 4c2 2 3 5 3 8s-1 6-3 7c-2-1-3-4-3-7s1-6 3-8zM9 9c-3 0-5 2-6 5 2 3 5 5 9 5M15 9c3 0 5 2 6 5-2 3-5 5-9 5", fill: "none" })
  );
});

export default NibFlowerLotus;
