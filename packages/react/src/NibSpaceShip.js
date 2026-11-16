import { createElement as h, forwardRef } from 'react';

export const NibSpaceShip = forwardRef(function NibSpaceShip({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l3 7v8H9V9zM9 12l-5 5v2l5-1M15 12l5 5v2l-5-1M10 20l2 2 2-2M12 9h.01", fill: "none" })
  );
});

export default NibSpaceShip;
