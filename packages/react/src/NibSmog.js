import { createElement as h, forwardRef } from 'react';

export const NibSmog = forwardRef(function NibSmog({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21V12h3v9M7 21V8h3v13M2 21h20M14 9c1-1 2 1 3 0s2 1 3 0M13 13c1-1 2 1 3 0s2 1 3 0s2 1 3 0M12 5c1-1 2 1 3 0s2 1 3 0", fill: "none" })
  );
});

export default NibSmog;
