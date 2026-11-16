import { createElement as h, forwardRef } from 'react';

export const NibVersion = forwardRef(function NibVersion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l9 4.5L12 11 3 6.5zM3 12l9 4.5 9-4.5M3 17.5L12 22l9-4.5", fill: "none" })
  );
});

export default NibVersion;
