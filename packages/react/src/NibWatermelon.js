import { createElement as h, forwardRef } from 'react';

export const NibWatermelon = forwardRef(function NibWatermelon({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 8a10 10 0 0 0 20 0zM5 8a7 7 0 0 0 14 0M9 11h.01M12 13h.01M15 11h.01", fill: "none" })
  );
});

export default NibWatermelon;
