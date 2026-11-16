import { createElement as h, forwardRef } from 'react';

export const NibWandAi = forwardRef(function NibWandAi({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 20L16 8M14 6l4 4M19 2l.7 1.8 1.8.7-1.8.7L19 7l-.7-1.8-1.8-.7 1.8-.7zM7 3v2M6 4h2", fill: "none" })
  );
});

export default NibWandAi;
