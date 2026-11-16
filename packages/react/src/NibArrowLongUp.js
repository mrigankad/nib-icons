import { createElement as h, forwardRef } from 'react';

export const NibArrowLongUp = forwardRef(function NibArrowLongUp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21V3M8 7l4-4 4 4", fill: "none" })
  );
});

export default NibArrowLongUp;
