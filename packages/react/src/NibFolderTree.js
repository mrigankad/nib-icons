import { createElement as h, forwardRef } from 'react';

export const NibFolderTree = forwardRef(function NibFolderTree({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 3v14a2 2 0 0 0 2 2h4M4 8h6M12 5h3l1 1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1zM12 16h3l1 1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z", fill: "none" })
  );
});

export default NibFolderTree;
