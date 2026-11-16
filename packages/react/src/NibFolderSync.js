import { createElement as h, forwardRef } from 'react';

export const NibFolderSync = forwardRef(function NibFolderSync({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 13a3 3 0 0 1 5.2-1.8M15 14a3 3 0 0 1-5.2 1.8M14.5 9.5v2h-2M9.5 17.5v-2h2", fill: "none" })
  );
});

export default NibFolderSync;
