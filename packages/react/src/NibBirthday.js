import { createElement as h, forwardRef } from 'react';

export const NibBirthday = forwardRef(function NibBirthday({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0M12 12V9M12 4.5c-.8 1-.8 1.8 0 2.3.8-.5.8-1.3 0-2.3z", fill: "none" })
  );
});

export default NibBirthday;
