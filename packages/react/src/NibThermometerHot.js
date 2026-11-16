import { createElement as h, forwardRef } from 'react';

export const NibThermometerHot = forwardRef(function NibThermometerHot({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M11 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0zM9 8v9M15 5h5M15 9h5M15 13h3", fill: "none" })
  );
});

export default NibThermometerHot;
