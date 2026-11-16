import { createElement as h, forwardRef } from 'react';

export const NibShower = forwardRef(function NibShower({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 22V6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3M9 8h8a4 4 0 0 0-8 0zM10 12v1M13 12v1.5M16 12v1M11.5 15v1M14.5 15v1M13 18v1", fill: "none" })
  );
});

export default NibShower;
