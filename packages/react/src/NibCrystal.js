import { createElement as h, forwardRef } from 'react';

export const NibCrystal = forwardRef(function NibCrystal({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 2l5 6-5 14-5-14zM7 8h10M12 2v20", fill: "none" })
  );
});

export default NibCrystal;
