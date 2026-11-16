import { createElement as h, forwardRef } from 'react';

export const NibTextCursor = forwardRef(function NibTextCursor({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4h1.5A1.5 1.5 0 0 1 12 5.5v13a1.5 1.5 0 0 1-1.5 1.5H9M15 4h-1.5A1.5 1.5 0 0 0 12 5.5M15 20h-1.5a1.5 1.5 0 0 1-1.5-1.5M10 12h4", fill: "none" })
  );
});

export default NibTextCursor;
