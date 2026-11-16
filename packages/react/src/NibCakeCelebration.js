import { createElement as h, forwardRef } from 'react';

export const NibCakeCelebration = forwardRef(function NibCakeCelebration({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 21v-6h16v6M2 21h20M6 15v-3h12v3M8 12V9M12 12V9M16 12V9M8 6.5c-.6-.6-.4-1.5 0-2 .4.5.6 1.4 0 2zM12 6.5c-.6-.6-.4-1.5 0-2 .4.5.6 1.4 0 2zM16 6.5c-.6-.6-.4-1.5 0-2 .4.5.6 1.4 0 2zM4 18c2 1 3-1 4 0s3 1 4 0 3-1 4 0 3 1 4 0", fill: "none" })
  );
});

export default NibCakeCelebration;
