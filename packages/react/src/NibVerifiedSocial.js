import { createElement as h, forwardRef } from 'react';

export const NibVerifiedSocial = forwardRef(function NibVerifiedSocial({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2.500l2.300 1.800 2.900-.1.900 2.800 2.400 1.700-.9 2.800.9 2.800-2.400 1.700-.9 2.800-2.900-.1L12 21.500l-2.300-1.800-2.900.1-.9-2.800-2.400-1.700.9-2.800-.9-2.800 2.400-1.700.9-2.800 2.900.1z", fill: "none" }),
    h('path', { d: "m8.500 12 2.500 2.500 4.500-5", fill: "none" })
  );
});

export default NibVerifiedSocial;
