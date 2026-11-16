import { createElement as h, forwardRef } from 'react';

export const NibCurtains = forwardRef(function NibCurtains({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 3h20M4 3c0 6 2 10 5 12-2 2-3 4-3 6H4zM20 3c0 6-2 10-5 12 2 2 3 4 3 6h2z", fill: "none" })
  );
});

export default NibCurtains;
