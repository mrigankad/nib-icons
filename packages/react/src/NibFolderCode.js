import { createElement as h, forwardRef } from 'react';

export const NibFolderCode = forwardRef(function NibFolderCode({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM10 11l-2 2.5 2 2.5M14 11l2 2.5-2 2.5", fill: "none" })
  );
});

export default NibFolderCode;
