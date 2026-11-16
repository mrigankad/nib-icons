import { createElement as h, forwardRef } from 'react';

export const NibBracketsAngle = forwardRef(function NibBracketsAngle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4l-6 8 6 8M15 4l6 8-6 8", fill: "none" })
  );
});

export default NibBracketsAngle;
