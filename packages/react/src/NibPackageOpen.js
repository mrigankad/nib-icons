import { createElement as h, forwardRef } from 'react';

export const NibPackageOpen = forwardRef(function NibPackageOpen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9l9 4 9-4M3 9v8l9 4 9-4V9M12 13v8M3 9L1.5 6 10 2l2 3 2-3 8.5 4L21 9", fill: "none" })
  );
});

export default NibPackageOpen;
