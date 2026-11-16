import { createElement as h, forwardRef } from 'react';

export const NibFabric = forwardRef(function NibFabric({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4zM4 4c2 0 4 1 4 4v12M8 10h12M8 15h12", fill: "none" })
  );
});

export default NibFabric;
