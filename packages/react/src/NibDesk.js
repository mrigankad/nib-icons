import { createElement as h, forwardRef } from 'react';

export const NibDesk = forwardRef(function NibDesk({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 12h20M4 12v9M20 12v9M14 12v6h6M14 15h6M8 12V8.5h4V12M7 5h6v3.5H7z", fill: "none" })
  );
});

export default NibDesk;
