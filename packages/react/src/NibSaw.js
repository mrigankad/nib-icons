import { createElement as h, forwardRef } from 'react';

export const NibSaw = forwardRef(function NibSaw({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8h4v8H2zM6 9l16 5-16 3zM9 12.5l1 2M12 13.5l1 2M15 14.5l1 1.5M18 15.5l.5 1", fill: "none" })
  );
});

export default NibSaw;
