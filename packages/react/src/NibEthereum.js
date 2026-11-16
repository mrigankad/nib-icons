import { createElement as h, forwardRef } from 'react';

export const NibEthereum = forwardRef(function NibEthereum({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l7 10-7 4-7-4zM5 13.5l7 8.5 7-8.5-7 4z", fill: "none" })
  );
});

export default NibEthereum;
