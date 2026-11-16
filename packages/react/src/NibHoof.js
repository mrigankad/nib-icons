import { createElement as h, forwardRef } from 'react';

export const NibHoof = forwardRef(function NibHoof({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20c-1-5 0-11 3-14 3-3 7-3 10 0 3 3 4 9 3 14h-6l-1-4h-2l-1 4z", fill: "none" }),
    h('path', { d: "M8 20c0-3 1-6 4-6s4 3 4 6", fill: "none" })
  );
});

export default NibHoof;
