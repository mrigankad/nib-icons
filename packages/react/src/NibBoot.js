import { createElement as h, forwardRef } from 'react';

export const NibBoot = forwardRef(function NibBoot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 2h7v11l6 3a2 2 0 0 1 1 2v2H5v-7zM5 20v2M20 20v2M6 6h7", fill: "none" })
  );
});

export default NibBoot;
