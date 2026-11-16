import { createElement as h, forwardRef } from 'react';

export const NibHeading1 = forwardRef(function NibHeading1({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5v14M12 5v14M4 12h8M16.5 10l2.5-2v11", fill: "none" })
  );
});

export default NibHeading1;
