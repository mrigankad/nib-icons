import { createElement as h, forwardRef } from 'react';

export const NibJuice = forwardRef(function NibJuice({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 7h12l-1.5 15h-9zM6.5 12h11M14 7l2-5h3M9 7a3 3 0 0 1 3-3", fill: "none" })
  );
});

export default NibJuice;
