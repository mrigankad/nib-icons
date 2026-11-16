import { createElement as h, forwardRef } from 'react';

export const NibButterfly = forwardRef(function NibButterfly({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 7v13M12 10C10 5 3 3 3 7c0 3 3 5 7 5-3 1-5 3-4 5 1 3 5 1 6-3M12 10c2-5 9-7 9-3 0 3-3 5-7 5 3 1 5 3 4 5-1 3-5 1-6-3M10 4l2 3 2-3", fill: "none" })
  );
});

export default NibButterfly;
