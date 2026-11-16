import { createElement as h, forwardRef } from 'react';

export const NibCurry = forwardRef(function NibCurry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12h18a9 7 0 0 1-18 0zM2 12h1M21 12h1M5 12c2-1 3 1 5 0s3 1 5 0 3 1 4 0M8 8c0-1 1-1 1-2s-1-1-1-2M12 8c0-1 1-1 1-2s-1-1-1-2M16 8c0-1 1-1 1-2s-1-1-1-2", fill: "none" })
  );
});

export default NibCurry;
