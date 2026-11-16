import { createElement as h, forwardRef } from 'react';

export const NibScaffold = forwardRef(function NibScaffold({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 2v20M20 2v20M12 2v20M4 8h16M4 15h16M4 22h16M4 8l8 7M12 8l8 7", fill: "none" })
  );
});

export default NibScaffold;
