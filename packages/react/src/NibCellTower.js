import { createElement as h, forwardRef } from 'react';

export const NibCellTower = forwardRef(function NibCellTower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21V9M7 21l5-12 5 12M8.5 17h7M10 13.5h4M8 3l2 2M16 3l-2 2M5 6h3M16 6h3", fill: "none" })
  );
});

export default NibCellTower;
