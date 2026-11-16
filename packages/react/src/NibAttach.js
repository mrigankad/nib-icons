import { createElement as h, forwardRef } from 'react';

export const NibAttach = forwardRef(function NibAttach({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M21 11l-8.5 8.5a5.5 5.5 0 0 1-7.8-7.8L13 3.5a3.7 3.7 0 0 1 5.2 5.2l-8.3 8.3a1.8 1.8 0 0 1-2.6-2.6L15 6.7", fill: "none" })
  );
});

export default NibAttach;
