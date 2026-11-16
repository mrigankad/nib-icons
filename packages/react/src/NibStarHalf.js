import { createElement as h, forwardRef } from 'react';

export const NibStarHalf = forwardRef(function NibStarHalf({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2.500l2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.400l-5.900 3.100 1.200-6.500L2.500 9.400l6.600-.9z", fill: "none" }),
    h('path', { d: "M12 2.500v14.900", fill: "none" }),
    h('path', { d: "M12 7.500 10.500 10.500 7.500 11", fill: "none" })
  );
});

export default NibStarHalf;
