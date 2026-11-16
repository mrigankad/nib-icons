import { createElement as h, forwardRef } from 'react';

export const NibLighthouse = forwardRef(function NibLighthouse({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M10 4h4v4h-4zM9 8h6l1.5 13h-9zM12 2v2M8.5 13h7M8 17h8M6 21h12M3 5l5 1M21 5l-5 1", fill: "none" })
  );
});

export default NibLighthouse;
