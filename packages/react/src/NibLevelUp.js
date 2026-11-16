import { createElement as h, forwardRef } from 'react';

export const NibLevelUp = forwardRef(function NibLevelUp({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l7 7h-4v5H9v-5H5zM9 18h6M10 21h4", fill: "none" })
  );
});

export default NibLevelUp;
