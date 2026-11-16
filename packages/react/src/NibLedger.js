import { createElement as h, forwardRef } from 'react';

export const NibLedger = forwardRef(function NibLedger({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h14v18H5zM9 3v18M12 8h4M12 12h4M12 16h4", fill: "none" })
  );
});

export default NibLedger;
