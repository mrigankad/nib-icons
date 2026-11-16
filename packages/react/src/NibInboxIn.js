import { createElement as h, forwardRef } from 'react';

export const NibInboxIn = forwardRef(function NibInboxIn({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 14h5l1.5 2.5h5L16 14h5v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 3v8M9 8l3 3 3-3", fill: "none" })
  );
});

export default NibInboxIn;
