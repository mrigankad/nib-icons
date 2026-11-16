import { createElement as h, forwardRef } from 'react';

export const NibSignpost = forwardRef(function NibSignpost({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3v18M12 5h6l2.5 2.5L18 10h-6M12 12H6l-2.5 2.5L6 17h6M9 21h6", fill: "none" })
  );
});

export default NibSignpost;
