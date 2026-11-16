import { createElement as h, forwardRef } from 'react';

export const NibCage = forwardRef(function NibCage({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v2M4 21V11a8 7 0 0 1 16 0v10zM3 21h18M8 6v15M12 4v17M16 6v15M4 14h16", fill: "none" })
  );
});

export default NibCage;
