import { createElement as h, forwardRef } from 'react';

export const NibGurudwara = forwardRef(function NibGurudwara({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v2M8 9a4 4 0 0 1 8 0zM7 9h10v4H7zM4 13h16v8H4zM10 21v-3a2 2 0 0 1 4 0v3M4 13V10M20 13V10M2 21h20", fill: "none" })
  );
});

export default NibGurudwara;
