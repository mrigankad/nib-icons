import { createElement as h, forwardRef } from 'react';

export const NibBloodDrop = forwardRef(function NibBloodDrop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5zM12 12v5M9.5 14.5h5", fill: "none" })
  );
});

export default NibBloodDrop;
