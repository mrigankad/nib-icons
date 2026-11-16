import { createElement as h, forwardRef } from 'react';

export const NibStrikethrough = forwardRef(function NibStrikethrough({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M16 6.5A4 4 0 0 0 12.5 5h-1.3A3.2 3.2 0 0 0 8 8.2c0 1.6 1 2.8 3.8 3.8M4 12h16M8 17.5a4 4 0 0 0 3.5 1.5h1.3a3.2 3.2 0 0 0 3.2-3.2c0-.7-.2-1.3-.5-1.8", fill: "none" })
  );
});

export default NibStrikethrough;
