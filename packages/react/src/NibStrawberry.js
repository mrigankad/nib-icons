import { createElement as h, forwardRef } from 'react';

export const NibStrawberry = forwardRef(function NibStrawberry({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 7c-4-1-8 1-8 5 0 5 5 10 8 10s8-5 8-10c0-4-4-6-8-5zM12 7L9 4M12 7l3-3M12 7V3M9 12h.01M15 12h.01M12 15h.01M10 18h.01M14 18h.01", fill: "none" })
  );
});

export default NibStrawberry;
