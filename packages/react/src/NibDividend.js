import { createElement as h, forwardRef } from 'react';

export const NibDividend = forwardRef(function NibDividend({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 21a9 9 0 1 1 0-18v9h9a9 9 0 0 1-9 9z", fill: "none" }),
    h('path', { d: "M15 2.5A7 7 0 0 1 21.5 9H15z", fill: "none" }),
    h('path', { d: "M8 10.5v4M9.3 11.2a1.3 1 0 0 0-1.3-.7 1 1 0 0 0 0 2 1 1 0 0 1 0 2 1.3 1 0 0 1-1.3-.7", fill: "none" })
  );
});

export default NibDividend;
