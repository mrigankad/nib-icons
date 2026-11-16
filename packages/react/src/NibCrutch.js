import { createElement as h, forwardRef } from 'react';

export const NibCrutch = forwardRef(function NibCrutch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h8M9 3l2 13M15 3l-2 13M10 10h4M11 16h2v6h-2z", fill: "none" })
  );
});

export default NibCrutch;
