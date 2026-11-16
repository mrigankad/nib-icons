import { createElement as h, forwardRef } from 'react';

export const NibScrewdriver = forwardRef(function NibScrewdriver({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 4l6 6-3 3-6-6zM11 7l-1 1 6 6 1-1M10 14l-7 7M13 11l-3 3", fill: "none" })
  );
});

export default NibScrewdriver;
