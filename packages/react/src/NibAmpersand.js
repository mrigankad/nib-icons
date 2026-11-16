import { createElement as h, forwardRef } from 'react';

export const NibAmpersand = forwardRef(function NibAmpersand({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M19 20L9.2 9.8A3.3 3.3 0 1 1 14.5 7c0 1.8-1.6 2.9-4.2 4.4C7.5 13 5.5 14.4 5.5 16.8A3.8 3.8 0 0 0 9.4 20.5c2.4 0 4.5-1.6 6.6-4.5L18 13", fill: "none" })
  );
});

export default NibAmpersand;
