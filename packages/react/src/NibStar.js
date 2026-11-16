import { createElement as h, forwardRef } from 'react';

export const NibStar = forwardRef(function NibStar({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2.500l2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.400l-5.900 3.100 1.200-6.500L2.500 9.400l6.600-.9z", fill: "none" }),
    h('path', { d: "M12 8.200l1.200 2.500 2.700.4-2 1.900.5 2.700L12 14.400l-2.400 1.300.5-2.700-2-1.900 2.700-.4z", fill: "none" })
  );
});

export default NibStar;
