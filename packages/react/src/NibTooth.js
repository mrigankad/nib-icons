import { createElement as h, forwardRef } from 'react';

export const NibTooth = forwardRef(function NibTooth({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5c-2-2-7-2-8 2-1 3 1 6 1.5 9s1 6 2.5 6 1.5-3 2.5-5c.5-1 2.5-1 3 0 1 2 1 5 2.5 5s2-3 2.5-6S21 10 20 7c-1-4-6-4-8-2z", fill: "none" })
  );
});

export default NibTooth;
