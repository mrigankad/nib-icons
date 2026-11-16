import { createElement as h, forwardRef } from 'react';

export const NibPowerLine = forwardRef(function NibPowerLine({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 22V4M19 22V4M2 6h6M16 6h6M2 10h6M16 10h6M8 6c4 3 4 3 8 0M8 10c4 3 4 3 8 0", fill: "none" })
  );
});

export default NibPowerLine;
