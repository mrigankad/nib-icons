import { createElement as h, forwardRef } from 'react';

export const NibIvDrip = forwardRef(function NibIvDrip({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M18 2v20M14 22h8M18 3h-4M8 3h6v8a3 3 0 0 1-6 0zM11 14v2a3 3 0 0 0 3 3h4M8 7h6", fill: "none" })
  );
});

export default NibIvDrip;
