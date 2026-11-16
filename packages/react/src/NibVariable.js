import { createElement as h, forwardRef } from 'react';

export const NibVariable = forwardRef(function NibVariable({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 4c-2 2-3 5-3 8s1 6 3 8M17 4c2 2 3 5 3 8s-1 6-3 8M9 9l6 6M15 9l-6 6", fill: "none" })
  );
});

export default NibVariable;
