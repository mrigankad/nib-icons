import { createElement as h, forwardRef } from 'react';

export const NibShip = forwardRef(function NibShip({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 15l2 4h14l2-4zM5 15V9h14v6M9 9V5h6v4M12 2v3M2 22c2-1.5 3 1 5 0s3 1 5 0 3 1 5 0 3 1 5 0", fill: "none" })
  );
});

export default NibShip;
