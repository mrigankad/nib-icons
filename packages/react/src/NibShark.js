import { createElement as h, forwardRef } from 'react';

export const NibShark = forwardRef(function NibShark({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 14c4-3 9-4 13-3l2-5 1 5c2 1 3 2 4 3l-3 1 1 3-4-2c-4 1-9 1-14-2zM6 14l1.5-1M6 15.5l2-.5M12 15l1 3", fill: "none" })
  );
});

export default NibShark;
