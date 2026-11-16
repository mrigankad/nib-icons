import { createElement as h, forwardRef } from 'react';

export const NibFolderLock = forwardRef(function NibFolderLock({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM10.5 13v-1.5a1.5 1.5 0 0 1 3 0V13", fill: "none" }),
    h('rect', { x: "9", y: "13", width: "6", height: "4", rx: "1", fill: "none" })
  );
});

export default NibFolderLock;
