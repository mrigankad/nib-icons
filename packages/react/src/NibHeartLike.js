import { createElement as h, forwardRef } from 'react';

export const NibHeartLike = forwardRef(function NibHeartLike({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 20.500S3 15.500 3 9.500A4.800 4.800 0 0 1 12 7a4.800 4.800 0 0 1 9 2.500c0 6-9 11-9 11z", fill: "none" }),
    h('path', { d: "M6.500 9.500a2.500 2.500 0 0 1 2.500-2.500", fill: "none" })
  );
});

export default NibHeartLike;
