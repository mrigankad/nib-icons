import { createElement as h, forwardRef } from 'react';

export const NibCake = forwardRef(function NibCake({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21v-9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9M2 21h20M4 15c2 1.5 3-1 4 0s3 1.5 4 0 3-1 4 0 3 1.5 4 0M12 11V8M12 5.5c-.8-1-.5-2 0-3 .5 1 .8 2 0 3z", fill: "none" })
  );
});

export default NibCake;
