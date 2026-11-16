import { createElement as h, forwardRef } from 'react';

export const NibSummarize = forwardRef(function NibSummarize({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 4h18M3 8h18M3 12h18M7 17h10M10 21h4M12 13v3", fill: "none" })
  );
});

export default NibSummarize;
