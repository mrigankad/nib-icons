import { createElement as h, forwardRef } from 'react';

export const NibWhale = forwardRef(function NibWhale({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 13c0-4 4-6 9-6 4 0 7 2 8 5l3-3v7l-3-2c-1 4-5 6-9 6-5 0-8-3-8-7zM6 12h.01M10 4c0 1.5 1 2 2 2s2-.5 2-2M12 6V4", fill: "none" })
  );
});

export default NibWhale;
