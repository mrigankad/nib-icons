import { createElement as h, forwardRef } from 'react';

export const NibBroccoli = forwardRef(function NibBroccoli({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 13a3 3 0 0 1-1-5.8 3.5 3.5 0 0 1 6-2.5 3.5 3.5 0 0 1 6 2.5A3 3 0 0 1 17 13zM10 13l-1 8h6l-1-8M12 13v4", fill: "none" })
  );
});

export default NibBroccoli;
