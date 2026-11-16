import { createElement as h, forwardRef } from 'react';

export const NibCity = forwardRef(function NibCity({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M2 21h20M3 21V11h5v10M8 21V4h7v17M15 21V8h6v13M10.5 8h2M10.5 12h2M10.5 16h2M17.5 12h1M17.5 16h1M5 14h1M5 17h1", fill: "none" })
  );
});

export default NibCity;
