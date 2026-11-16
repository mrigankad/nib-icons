import { createElement as h, forwardRef } from 'react';

export const NibPpe = forwardRef(function NibPpe({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 10a8 7 0 0 1 16 0zM3 10h18M12 3v3M6 14h12v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zM12 14v6", fill: "none" })
  );
});

export default NibPpe;
