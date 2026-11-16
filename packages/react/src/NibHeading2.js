import { createElement as h, forwardRef } from 'react';

export const NibHeading2 = forwardRef(function NibHeading2({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5v14M12 5v14M4 12h8M16 10a2.3 2.3 0 1 1 4 1.6L16 19h4.5", fill: "none" })
  );
});

export default NibHeading2;
