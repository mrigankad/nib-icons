import { createElement as h, forwardRef } from 'react';

export const NibFolderHeart = forwardRef(function NibFolderHeart({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 17s-3.5-2-3.5-4.3a1.8 1.8 0 0 1 3.5-.7 1.8 1.8 0 0 1 3.5.7C15.5 15 12 17 12 17z", fill: "none" })
  );
});

export default NibFolderHeart;
