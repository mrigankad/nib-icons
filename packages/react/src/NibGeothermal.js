import { createElement as h, forwardRef } from 'react';

export const NibGeothermal = forwardRef(function NibGeothermal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14h20M4 18h16M7 22h10M9 14V9M15 14V9M8 6c0-1 1-1 1-2M14 6c0-1 1-1 1-2M12 11c-1 1-1 2-1 3", fill: "none" })
  );
});

export default NibGeothermal;
