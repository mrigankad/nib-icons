import { createElement as h, forwardRef } from 'react';

export const NibBlueprint = forwardRef(function NibBlueprint({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M5 3h16v16H5a2 2 0 0 0-2 2V5a2 2 0 0 1 2-2zM3 21h18M9 7h8v8H9zM13 7v4h4", fill: "none" })
  );
});

export default NibBlueprint;
