import { createElement as h, forwardRef } from 'react';

export const NibFileCopy = forwardRef(function NibFileCopy({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7zM15 2v5h5M4 7v13a2 2 0 0 0 2 2h9", fill: "none" })
  );
});

export default NibFileCopy;
