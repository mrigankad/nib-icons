import { createElement as h, forwardRef } from 'react';

export const NibQuestionSymbol = forwardRef(function NibQuestionSymbol({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M8 8a4 4 0 1 1 5.5 3.7c-.9.4-1.5 1.2-1.5 2.3v1M12 20h.01", fill: "none" })
  );
});

export default NibQuestionSymbol;
