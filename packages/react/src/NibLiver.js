import { createElement as h, forwardRef } from 'react';

export const NibLiver = forwardRef(function NibLiver({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 8c3-2 9-3 17-2 2 0 2 2 1 4-2 4-7 9-11 9-3 0-7-4-7-8V8zM13 6c0 4-1 7-3 13", fill: "none" })
  );
});

export default NibLiver;
