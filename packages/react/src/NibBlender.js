import { createElement as h, forwardRef } from 'react';

export const NibBlender = forwardRef(function NibBlender({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M6 2h12l-2 12H8zM16 4h3v5h-2.2M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4H6zM10 8l2 2 2-2M12 19h.01", fill: "none" })
  );
});

export default NibBlender;
