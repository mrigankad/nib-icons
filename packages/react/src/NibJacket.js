import { createElement as h, forwardRef } from 'react';

export const NibJacket = forwardRef(function NibJacket({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 3h8l4 3v15h-4V11M8 3L4 6v15h4V11M8 3l4 6 4-6M12 9v12M8 21h8M14.5 14h1", fill: "none" })
  );
});

export default NibJacket;
