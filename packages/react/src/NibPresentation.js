import { createElement as h, forwardRef } from 'react';

export const NibPresentation = forwardRef(function NibPresentation({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 3h20M4 3v11h16V3M12 14v3M8 21l4-4 4 4M8 11l3-3 2 2 3-3", fill: "none" })
  );
});

export default NibPresentation;
