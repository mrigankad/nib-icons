import { createElement as h, forwardRef } from 'react';

export const NibBalloon = forwardRef(function NibBalloon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 16c-3.5 0-6-3-6-7a6 6 0 0 1 12 0c0 4-2.5 7-6 7zM11 16l1 1.5 1-1.5M12 17.5c0 2-2 2-2 4.5M10 6a3 3 0 0 1 2-1.5", fill: "none" })
  );
});

export default NibBalloon;
