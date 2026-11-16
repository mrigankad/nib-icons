import { createElement as h, forwardRef } from 'react';

export const NibFish = forwardRef(function NibFish({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12c3-5 8-7 12-6 3 1 5 3 6 6-1 3-3 5-6 6-4 1-9-1-12-6zM20 12l2-3v6zM15 10h.01M11 8c1 2 1 6 0 8", fill: "none" })
  );
});

export default NibFish;
