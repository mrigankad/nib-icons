import { createElement as h, forwardRef } from 'react';

export const NibBrush = forwardRef(function NibBrush({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 14l7.5-9.5a2 2 0 0 1 3 3L11 15M10 14a3 3 0 0 0-4.2.8C5 16.5 5 19 3 20c3 1 6.5.5 7.5-1.5A3 3 0 0 0 11 15z", fill: "none" })
  );
});

export default NibBrush;
