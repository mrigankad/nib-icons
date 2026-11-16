import { createElement as h, forwardRef } from 'react';

export const NibArrowDown = forwardRef(function NibArrowDown({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 5v14M6 13l6 6 6-6", fill: "none" })
  );
});

export default NibArrowDown;
