import { createElement as h, forwardRef } from 'react';

export const NibContextWindow = forwardRef(function NibContextWindow({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4H3v16h3M18 4h3v16h-3M7 8h10M7 12h10M7 16h6", fill: "none" })
  );
});

export default NibContextWindow;
