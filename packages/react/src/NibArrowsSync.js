import { createElement as h, forwardRef } from 'react';

export const NibArrowsSync = forwardRef(function NibArrowsSync({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 9a7.5 7.5 0 0 1 13-2.5M19 15a7.5 7.5 0 0 1-13 2.5M18.5 3v3.5H15M5.5 21v-3.5H9", fill: "none" })
  );
});

export default NibArrowsSync;
