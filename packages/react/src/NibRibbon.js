import { createElement as h, forwardRef } from 'react';

export const NibRibbon = forwardRef(function NibRibbon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2c-3 0-4 2-4 4 0 3 4 7 4 7s4-4 4-7c0-2-1-4-4-4zM9.5 10L5 21l3-1 2 2 2-9M14.5 10L19 21l-3-1-2 2-2-9", fill: "none" })
  );
});

export default NibRibbon;
