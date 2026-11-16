import { createElement as h, forwardRef } from 'react';

export const NibRunningShoe = forwardRef(function NibRunningShoe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 16V9l4-2 3 3 3-1 6 3c2 1 4 2 4 4v1zM2 19h20M9 10l1 2M12 9l1 2", fill: "none" })
  );
});

export default NibRunningShoe;
