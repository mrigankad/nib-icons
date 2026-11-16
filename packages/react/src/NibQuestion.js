import { createElement as h, forwardRef } from 'react';

export const NibQuestion = forwardRef(function NibQuestion({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8.5 8.5a3.5 3.5 0 1 1 4.8 3.3c-.8.4-1.3 1-1.3 1.9v.8M12 19h.01", fill: "none" })
  );
});

export default NibQuestion;
