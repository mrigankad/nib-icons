import { createElement as h, forwardRef } from 'react';

export const NibVideoOff = forwardRef(function NibVideoOff({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10.5 5H20a2 2 0 0 1 2 2v9.5M18 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M3 3l18 18", fill: "none" })
  );
});

export default NibVideoOff;
