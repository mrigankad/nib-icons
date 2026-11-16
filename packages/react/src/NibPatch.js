import { createElement as h, forwardRef } from 'react';

export const NibPatch = forwardRef(function NibPatch({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4.5 13.5l9-9a3.5 3.5 0 0 1 5 5l-9 9a3.5 3.5 0 0 1-5-5zM10 12h.01M12 10h.01M12 14h.01M14 12h.01", fill: "none" })
  );
});

export default NibPatch;
