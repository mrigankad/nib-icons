import { createElement as h, forwardRef } from 'react';

export const NibGenerate = forwardRef(function NibGenerate({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9M8 13h6M8 17h8M18 2l1 2.5L21.5 5.5 19 6.5 18 9l-1-2.5L14.5 5.5 17 4.5z", fill: "none" })
  );
});

export default NibGenerate;
