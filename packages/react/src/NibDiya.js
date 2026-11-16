import { createElement as h, forwardRef } from 'react';

export const NibDiya = forwardRef(function NibDiya({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 14h18c-1 4-5 6-9 6s-8-2-9-6zM21 14l1.5-1.5M12 11c-1.5-1.5-1.5-3.5 0-6 1.5 2.5 1.5 4.5 0 6z", fill: "none" })
  );
});

export default NibDiya;
