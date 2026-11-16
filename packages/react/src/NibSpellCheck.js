import { createElement as h, forwardRef } from 'react';

export const NibSpellCheck = forwardRef(function NibSpellCheck({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 13l3.5-9 3.5 9M4.3 10h4.4M12 17l3 3 6-7", fill: "none" })
  );
});

export default NibSpellCheck;
