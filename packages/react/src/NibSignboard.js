import { createElement as h, forwardRef } from 'react';

export const NibSignboard = forwardRef(function NibSignboard({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2v20M5 5h12l3 2.5L17 10H5zM19 13H7l-3 2.5L7 18h12zM8 22h8", fill: "none" })
  );
});

export default NibSignboard;
