import { createElement as h, forwardRef } from 'react';

export const NibKiteFestival = forwardRef(function NibKiteFestival({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l7 8-7 8-7-8zM5 10h14M12 2v16M12 18l-1 2 2 1-1 2", fill: "none" })
  );
});

export default NibKiteFestival;
