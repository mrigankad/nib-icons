import { createElement as h, forwardRef } from 'react';

export const NibDiet = forwardRef(function NibDiet({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 7.500C10.500 6 6 6.500 6 11.500c0 4.500 3 9 6 9s6-4.500 6-9c0-5-4.500-5.500-6-4z", fill: "none" }),
    h('path', { d: "M12 7.500c0-2 1-3.500 3-4.500", fill: "none" })
  );
});

export default NibDiet;
