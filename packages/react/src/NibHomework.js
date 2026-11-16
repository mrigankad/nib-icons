import { createElement as h, forwardRef } from 'react';

export const NibHomework = forwardRef(function NibHomework({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 11l9-7 9 7M5 9.5V20h14V9.5M9 13h6M9 16h4", fill: "none" })
  );
});

export default NibHomework;
