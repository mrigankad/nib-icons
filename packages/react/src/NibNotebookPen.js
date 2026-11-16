import { createElement as h, forwardRef } from 'react';

export const NibNotebookPen = forwardRef(function NibNotebookPen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H5v18h12v-8M3 7h4M3 12h4M3 17h4M20 3l2 2-8 8h-2v-2z", fill: "none" })
  );
});

export default NibNotebookPen;
