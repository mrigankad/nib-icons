import { createElement as h, forwardRef } from 'react';

export const NibOctagon = forwardRef(function NibOctagon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2h8l6 6v8l-6 6H8l-6-6V8z", fill: "none" })
  );
});

export default NibOctagon;
