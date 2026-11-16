import { createElement as h, forwardRef } from 'react';

export const NibNecklace = forwardRef(function NibNecklace({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 3c0 7 4 11 8 12 4-1 8-5 8-12M12 15v1M10 16h4l-2 5z", fill: "none" })
  );
});

export default NibNecklace;
