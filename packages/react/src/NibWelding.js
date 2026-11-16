import { createElement as h, forwardRef } from 'react';

export const NibWelding = forwardRef(function NibWelding({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l9-9M12 12l3-3 3 3-3 3zM18 6l1-3M20 9l3-1M19 4l2-2M2 21h10", fill: "none" })
  );
});

export default NibWelding;
