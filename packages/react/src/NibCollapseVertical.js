import { createElement as h, forwardRef } from 'react';

export const NibCollapseVertical = forwardRef(function NibCollapseVertical({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3v6M9 6l3 3 3-3M12 21v-6M9 18l3-3 3 3M5 12h14", fill: "none" })
  );
});

export default NibCollapseVertical;
