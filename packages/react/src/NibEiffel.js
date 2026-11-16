import { createElement as h, forwardRef } from 'react';

export const NibEiffel = forwardRef(function NibEiffel({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v3M10.5 5h3M11 5c0 5-2 10-6 16M13 5c0 5 2 10 6 16M9 12h6M7 16h10M9 21a3 3 0 0 1 6 0", fill: "none" })
  );
});

export default NibEiffel;
