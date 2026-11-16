import { createElement as h, forwardRef } from 'react';

export const NibMountains = forwardRef(function NibMountains({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M1 20l7-12 7 12zM12 14.5L16 8l7 12h-8", fill: "none" })
  );
});

export default NibMountains;
