import { createElement as h, forwardRef } from 'react';

export const NibTram = forwardRef(function NibTram({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 2h8M12 2v4M6 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM4 11h16M8 22l1.5-4M16 22l-1.5-4M8 14.5h.01M16 14.5h.01", fill: "none" })
  );
});

export default NibTram;
