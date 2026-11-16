import { createElement as h, forwardRef } from 'react';

export const NibSubscript = forwardRef(function NibSubscript({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 5l8 10M12 5l-8 10M16 15a1.8 1.8 0 1 1 3.1 1.2L16 19.5h4", fill: "none" })
  );
});

export default NibSubscript;
