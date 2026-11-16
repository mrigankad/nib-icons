import { createElement as h, forwardRef } from 'react';

export const NibLeaves = forwardRef(function NibLeaves({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M12 22V10M12 14c-5 0-8-3-8-8 5 0 8 3 8 8zM12 12c0-5 3-8 8-8 0 5-3 8-8 8z", fill: "none" })
  );
});

export default NibLeaves;
