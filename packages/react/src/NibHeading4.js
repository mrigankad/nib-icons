import { createElement as h, forwardRef } from 'react';

export const NibHeading4 = forwardRef(function NibHeading4({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5v14M12 5v14M4 12h8M19 19V8l-4 7.5h5.5", fill: "none" })
  );
});

export default NibHeading4;
