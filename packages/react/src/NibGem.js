import { createElement as h, forwardRef } from 'react';

export const NibGem = forwardRef(function NibGem({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l8 6-8 14L4 8zM4 8h16M9 8l3-6 3 6-3 14z", fill: "none" })
  );
});

export default NibGem;
