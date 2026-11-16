import { createElement as h, forwardRef } from 'react';

export const NibNail = forwardRef(function NibNail({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M7 3h10M12 3v15l-1 4M11 18h2", fill: "none" })
  );
});

export default NibNail;
