import { createElement as h, forwardRef } from 'react';

export const NibCollapseHorizontal = forwardRef(function NibCollapseHorizontal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h6M6 9l3 3-3 3M21 12h-6M18 9l-3 3 3 3M12 5v14", fill: "none" })
  );
});

export default NibCollapseHorizontal;
