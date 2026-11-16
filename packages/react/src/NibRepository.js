import { createElement as h, forwardRef } from 'react';

export const NibRepository = forwardRef(function NibRepository({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 19.5V5a2 2 0 0 1 2-2h14v15H6.5a2 2 0 0 0 0 4H9M13 19.5V22l1.5-1 1.5 1v-2.5", fill: "none" })
  );
});

export default NibRepository;
