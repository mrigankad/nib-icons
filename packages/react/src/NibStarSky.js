import { createElement as h, forwardRef } from 'react';

export const NibStarSky = forwardRef(function NibStarSky({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M9 4l1.2 2.8L13 8l-2.8 1.2L9 12l-1.2-2.8L5 8l2.8-1.2zM17 12l.8 1.7 1.7.8-1.7.8L17 17l-.8-1.7-1.7-.8 1.7-.8zM5 18h.01M20 5h.01M13 20h.01", fill: "none" })
  );
});

export default NibStarSky;
