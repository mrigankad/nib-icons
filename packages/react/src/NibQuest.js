import { createElement as h, forwardRef } from 'react';

export const NibQuest = forwardRef(function NibQuest({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4zM6 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 0-4H8M12 11v.01M12 13v2", fill: "none" })
  );
});

export default NibQuest;
