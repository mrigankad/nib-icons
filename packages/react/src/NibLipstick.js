import { createElement as h, forwardRef } from 'react';

export const NibLipstick = forwardRef(function NibLipstick({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 13h6v9H9zM10 13V8h4v5M10 8l4-6v6", fill: "none" })
  );
});

export default NibLipstick;
