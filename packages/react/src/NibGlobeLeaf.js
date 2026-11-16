import { createElement as h, forwardRef } from 'react';

export const NibGlobeLeaf = forwardRef(function NibGlobeLeaf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 12a9 9 0 1 1-9-9M3 12h11M12 3a14 14 0 0 0 0 18M14 10c0-4 3-7 8-7 0 5-3 7-8 7zM14 10l4-4", fill: "none" })
  );
});

export default NibGlobeLeaf;
