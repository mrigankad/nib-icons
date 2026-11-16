import { createElement as h, forwardRef } from 'react';

export const NibYogaMat = forwardRef(function NibYogaMat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 9h14v10H3zM17 9a3 3 0 0 1 0 6h-3M17 15a2 2 0 0 0 0 4", fill: "none" }),
    h('path', { d: "M6 9v10M3 13h3", fill: "none" })
  );
});

export default NibYogaMat;
