import { createElement as h, forwardRef } from 'react';

export const NibAccessGranted = forwardRef(function NibAccessGranted({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8M2 21h11M11 12h.01M15 18.5l2 2 4.5-4.5", fill: "none" })
  );
});

export default NibAccessGranted;
