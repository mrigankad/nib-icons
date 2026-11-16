import { createElement as h, forwardRef } from 'react';

export const NibTools = forwardRef(function NibTools({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l9-9M12 12l2-2M14 3l7 7-2 2-7-7zM21 21L10 10M6 3a3 3 0 0 0-3 3l3 3 3-3z", fill: "none" })
  );
});

export default NibTools;
