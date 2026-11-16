import { createElement as h, forwardRef } from 'react';

export const NibFolderOpen = forwardRef(function NibFolderOpen({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 18V7a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v1M3 18l2.5-6.5A2 2 0 0 1 7.4 10H21l-2.7 7.3a2 2 0 0 1-1.9 1.7H4a1 1 0 0 1-1-1z", fill: "none" })
  );
});

export default NibFolderOpen;
