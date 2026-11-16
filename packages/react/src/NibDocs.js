import { createElement as h, forwardRef } from 'react';

export const NibDocs = forwardRef(function NibDocs({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM4 20a2 2 0 0 0 2 2h12v-4M8 6h6M8 9h6M8 12h4", fill: "none" })
  );
});

export default NibDocs;
