import { createElement as h, forwardRef } from 'react';

export const NibDoormat = forwardRef(function NibDoormat({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 8h16l2 10H2zM7 13l1-2 1 2 1-2 1 2M13 11v2M15 11h2l-2 2h2", fill: "none" })
  );
});

export default NibDoormat;
