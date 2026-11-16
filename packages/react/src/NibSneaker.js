import { createElement as h, forwardRef } from 'react';

export const NibSneaker = forwardRef(function NibSneaker({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 16V8l4-1 3 3 4-1 6 3c2 1 3 2 3 4v1zM2 19h20M8 11l1 2M11 10l1 2M14 11l1 2", fill: "none" })
  );
});

export default NibSneaker;
