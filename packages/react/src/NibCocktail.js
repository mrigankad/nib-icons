import { createElement as h, forwardRef } from 'react';

export const NibCocktail = forwardRef(function NibCocktail({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18l-9 9zM12 13v9M8 22h8M15 1l-2 6", fill: "none" }),
    h('circle', { cx: "18", cy: "4", r: "0.01", fill: "none" })
  );
});

export default NibCocktail;
