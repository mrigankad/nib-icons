import { createElement as h, forwardRef } from 'react';

export const NibWaterBottle = forwardRef(function NibWaterBottle({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 2h4v3h-4zM9 5h6l1 3v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8zM8 11h8M8 16h8", fill: "none" })
  );
});

export default NibWaterBottle;
