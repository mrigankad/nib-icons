import { createElement as h, forwardRef } from 'react';

export const NibFireStation = forwardRef(function NibFireStation({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21V9l9-6 9 6v12M2 21h20M6 21v-7h12v7M6 17h12M12 6c-1 1-1.5 1.5-1.5 2.5a1.5 1.5 0 0 0 3 0C13.5 7.5 13 7 12 6z", fill: "none" })
  );
});

export default NibFireStation;
