import { createElement as h, forwardRef } from 'react';

export const NibGarlic = forwardRef(function NibGarlic({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c0 3-1 4-3 5-3 2-5 5-5 8a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5c0-3-2-6-5-8-2-1-3-2-3-5zM12 9c-2 3-2 8 0 11M12 9c2 3 2 8 0 11M9 20v1.5M15 20v1.5", fill: "none" })
  );
});

export default NibGarlic;
