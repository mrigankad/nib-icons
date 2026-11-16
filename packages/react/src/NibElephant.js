import { createElement as h, forwardRef } from 'react';

export const NibElephant = forwardRef(function NibElephant({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 7a4 4 0 0 0-5 4c0 2 1 4 4 4M16 7a4 4 0 0 1 5 4c0 2-1 4-4 4M8 7a4 4 0 0 1 8 0v5c0 2-2 3-2 5v3a2 2 0 0 0 4 0M9.5 10h.01M14.5 10h.01", fill: "none" })
  );
});

export default NibElephant;
