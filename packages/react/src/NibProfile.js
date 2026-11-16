import { createElement as h, forwardRef } from 'react';

export const NibProfile = forwardRef(function NibProfile({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 21v-3a3 3 0 0 0-1-2.2A7 7 0 1 1 18 11c0 1 .5 1.5 1.5 3L18 15v2a2 2 0 0 1-2 2h-2v2", fill: "none" })
  );
});

export default NibProfile;
