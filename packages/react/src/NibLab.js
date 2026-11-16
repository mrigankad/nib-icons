import { createElement as h, forwardRef } from 'react';

export const NibLab = forwardRef(function NibLab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 2h4M5 2v6l-3 7a2 2 0 0 0 2 3h4a2 2 0 0 0 2-3L7 8V2M3 13h6M14 2h6M15 2v15a2 2 0 0 0 4 0V2M15 9h4M2 22h20", fill: "none" })
  );
});

export default NibLab;
