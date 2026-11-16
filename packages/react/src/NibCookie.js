import { createElement as h, forwardRef } from 'react';

export const NibCookie = forwardRef(function NibCookie({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3a9 9 0 1 0 9 9 3 3 0 0 1-4-3 3 3 0 0 1-3-4 2 2 0 0 1-2-2zM8 10h.01M11 15h.01M15 14h.01M8 16h.01", fill: "none" })
  );
});

export default NibCookie;
