import { createElement as h, forwardRef } from 'react';

export const NibHexagon = forwardRef(function NibHexagon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l8.7 5v10L12 22l-8.7-5V7z", fill: "none" })
  );
});

export default NibHexagon;
