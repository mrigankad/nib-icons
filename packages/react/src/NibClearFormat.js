import { createElement as h, forwardRef } from 'react';

export const NibClearFormat = forwardRef(function NibClearFormat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 7V5h12v2M10 5l-3 14M5 19h4M15 14l5 5M20 14l-5 5", fill: "none" })
  );
});

export default NibClearFormat;
