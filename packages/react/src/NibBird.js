import { createElement as h, forwardRef } from 'react';

export const NibBird = forwardRef(function NibBird({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M16 7h.01M3.5 20A11 11 0 0 1 14 9V6a3 3 0 0 1 5.5-1.5L22 6l-2.5 1V10a10 10 0 0 1-10 10zM8 20v2M12 19.5V22M8 15c2 0 4-1 5-3", fill: "none" })
  );
});

export default NibBird;
