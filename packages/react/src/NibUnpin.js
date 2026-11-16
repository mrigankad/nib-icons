import { createElement as h, forwardRef } from 'react';

export const NibUnpin = forwardRef(function NibUnpin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8.5 3.5h7M14 3.5V9l3.5 5H14M10 6v3l-3.5 5H12M12 14v7M3 3l18 18", fill: "none" })
  );
});

export default NibUnpin;
