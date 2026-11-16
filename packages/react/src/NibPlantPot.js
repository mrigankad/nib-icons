import { createElement as h, forwardRef } from 'react';

export const NibPlantPot = forwardRef(function NibPlantPot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 14h12l-2 8H8zM5 14h14M12 14V9M12 9c-3 0-5-2-5-6 3 0 5 2 5 6zM12 11c0-3 2-5 5-5 0 3-2 5-5 5z", fill: "none" })
  );
});

export default NibPlantPot;
