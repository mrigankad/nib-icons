import { createElement as h, forwardRef } from 'react';

export const NibBackup = forwardRef(function NibBackup({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 19h10a4.5 4.5 0 0 0 .5-9A6 6 0 0 0 6 10.5 4.3 4.3 0 0 0 7 19zM12 16v-5M9.5 13.5L12 11l2.5 2.5", fill: "none" })
  );
});

export default NibBackup;
