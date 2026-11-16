import { createElement as h, forwardRef } from 'react';

export const NibIpAddress = forwardRef(function NibIpAddress({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12zM9.5 7v6M12 13V7h1.5a1.5 1.5 0 0 1 0 3H12", fill: "none" })
  );
});

export default NibIpAddress;
