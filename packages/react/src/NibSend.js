import { createElement as h, forwardRef } from 'react';

export const NibSend = forwardRef(function NibSend({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 3L10 14M21 3l-7 18-4-7-7-4z", fill: "none" })
  );
});

export default NibSend;
