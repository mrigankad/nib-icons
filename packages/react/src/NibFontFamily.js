import { createElement as h, forwardRef } from 'react';

export const NibFontFamily = forwardRef(function NibFontFamily({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7V5h10v2M8 5v14M6 19h4M14 13v-1.5h7V13M17.5 11.5V19M16 19h3", fill: "none" })
  );
});

export default NibFontFamily;
