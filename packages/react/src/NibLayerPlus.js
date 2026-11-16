import { createElement as h, forwardRef } from 'react';

export const NibLayerPlus = forwardRef(function NibLayerPlus({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 3l9 5-9 5-9-5zM3 13l9 5 3-1.7M19 15v6M16 18h6", fill: "none" })
  );
});

export default NibLayerPlus;
