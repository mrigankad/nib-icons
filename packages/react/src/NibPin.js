import { createElement as h, forwardRef } from 'react';

export const NibPin = forwardRef(function NibPin({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8.5 3.5h7M10 3.5V9l-3.5 5h11L14 9V3.5M12 14v7", fill: "none" })
  );
});

export default NibPin;
