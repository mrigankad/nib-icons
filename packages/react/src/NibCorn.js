import { createElement as h, forwardRef } from 'react';

export const NibCorn = forwardRef(function NibCorn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c2.5 0 4 3 4 8s-1.5 8-4 8-4-3-4-8 1.5-8 4-8zM8 13c-3 1-4 4-4 8 3 0 6-1 8-3M16 13c3 1 4 4 4 8-3 0-6-1-8-3M10 7h4M9.5 10.5h5M10 14h4M12 2v16", fill: "none" })
  );
});

export default NibCorn;
