import { createElement as h, forwardRef } from 'react';

export const NibFilterOff = forwardRef(function NibFilterOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4h12l-4.5 5.5M14 14v5l-4 2v-8.5L4.5 6M3 3l18 18", fill: "none" })
  );
});

export default NibFilterOff;
