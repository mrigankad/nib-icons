import { createElement as h, forwardRef } from 'react';

export const NibArrowUp = forwardRef(function NibArrowUp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 19V5M6 11l6-6 6 6", fill: "none" })
  );
});

export default NibArrowUp;
