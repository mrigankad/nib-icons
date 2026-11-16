import { createElement as h, forwardRef } from 'react';

export const NibBadminton = forwardRef(function NibBadminton({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 14l-5-9h14l-5 9zM9 9h6M12 5v9", fill: "none" }),
    h('path', { d: "M10 14a2 2 0 0 0 4 0v4a2 2 0 0 1-4 0z", fill: "none" })
  );
});

export default NibBadminton;
