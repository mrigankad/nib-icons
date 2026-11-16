import { createElement as h, forwardRef } from 'react';

export const NibValley = forwardRef(function NibValley({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 20L7 6l5 10 5-10 5 14zM10 20c1-2 3-2 4 0", fill: "none" })
  );
});

export default NibValley;
