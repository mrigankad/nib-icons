import { createElement as h, forwardRef } from 'react';

export const NibTab = forwardRef(function NibTab({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 20h18M4 20V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3h6a2 2 0 0 1 2 2v8", fill: "none" })
  );
});

export default NibTab;
