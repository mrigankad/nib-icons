import { createElement as h, forwardRef } from 'react';

export const NibGrass = forwardRef(function NibGrass({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M5 21c0-5-2-8-3-10M8 21c0-6 1-10 4-13M12 21c0-6 0-10-2-13M16 21c0-5 2-9 5-11M19 21c0-3-1-6-3-8", fill: "none" })
  );
});

export default NibGrass;
