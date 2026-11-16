import { createElement as h, forwardRef } from 'react';

export const NibSaveAs = forwardRef(function NibSaveAs({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M7 3v5h8V3M7 21v-6h4M15 21v-2.5l4.5-4.5 2.5 2.5-4.5 4.5z", fill: "none" })
  );
});

export default NibSaveAs;
