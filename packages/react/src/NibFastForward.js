import { createElement as h, forwardRef } from 'react';

export const NibFastForward = forwardRef(function NibFastForward({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6v12l8.5-6zM12.5 6v12L21 12z", fill: "none" })
  );
});

export default NibFastForward;
