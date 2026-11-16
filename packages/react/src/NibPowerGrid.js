import { createElement as h, forwardRef } from 'react';

export const NibPowerGrid = forwardRef(function NibPowerGrid({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2L7 22M12 2l5 20M5 7h14M7 12h10M4 7l3 5M20 7l-3 5M9 17h6", fill: "none" })
  );
});

export default NibPowerGrid;
