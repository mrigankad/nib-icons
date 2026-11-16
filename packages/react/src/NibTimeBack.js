import { createElement as h, forwardRef } from 'react';

export const NibTimeBack = forwardRef(function NibTimeBack({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 12a9 9 0 1 0 2.6-6.4L3 8M3 3v5h5M12 7v5l-3 2", fill: "none" })
  );
});

export default NibTimeBack;
