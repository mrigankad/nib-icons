import { createElement as h, forwardRef } from 'react';

export const NibRulerSchool = forwardRef(function NibRulerSchool({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 17L17 2l5 5L7 22zM6 13l2 2M9 10l2 2M12 7l2 2M15 4l2 2", fill: "none" })
  );
});

export default NibRulerSchool;
