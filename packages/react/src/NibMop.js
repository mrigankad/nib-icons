import { createElement as h, forwardRef } from 'react';

export const NibMop = forwardRef(function NibMop({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v12M8 14h8l2 8H6zM9 18v4M12 18v4M15 18v4", fill: "none" })
  );
});

export default NibMop;
