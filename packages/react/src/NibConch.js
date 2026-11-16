import { createElement as h, forwardRef } from 'react';

export const NibConch = forwardRef(function NibConch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 15c2-7 8-11 14-10 3 .5 4 3 3 5.500l-4 7c-1 2-3 3-5 2.500C6 19.500 3 18 3 15z", fill: "none" }),
    h('path', { d: "M17 7c-3-1-6 1-6.500 4s2 4.500 4 3", fill: "none" })
  );
});

export default NibConch;
