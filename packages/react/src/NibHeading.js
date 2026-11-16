import { createElement as h, forwardRef } from 'react';

export const NibHeading = forwardRef(function NibHeading({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 4v16M18 4v16M6 12h12", fill: "none" })
  );
});

export default NibHeading;
