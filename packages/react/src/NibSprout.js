import { createElement as h, forwardRef } from 'react';

export const NibSprout = forwardRef(function NibSprout({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21v-9M12 12C12 8 9 6 4 6c0 4 3 6 8 6zM12 14c0-4 3-7 8-7 0 5-3 7-8 7zM6 21h12", fill: "none" })
  );
});

export default NibSprout;
