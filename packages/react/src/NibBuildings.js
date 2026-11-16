import { createElement as h, forwardRef } from 'react';

export const NibBuildings = forwardRef(function NibBuildings({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M4 21V9h7v12M11 21V3h9v18M7 12.5h1M7 16h1M14 7h3M14 11h3M14 15h3", fill: "none" })
  );
});

export default NibBuildings;
