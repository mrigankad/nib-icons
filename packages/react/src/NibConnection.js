import { createElement as h, forwardRef } from 'react';

export const NibConnection = forwardRef(function NibConnection({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 21l3.5-3.5M21 3l-3.5 3.5M7 13l4 4-2.5 2.5a2.8 2.8 0 0 1-4-4zM17 11l-4-4 2.5-2.5a2.8 2.8 0 0 1 4 4zM10 10l-1.5 1.5M14 14l-1.5 1.5", fill: "none" })
  );
});

export default NibConnection;
