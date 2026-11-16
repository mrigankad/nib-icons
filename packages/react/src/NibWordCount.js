import { createElement as h, forwardRef } from 'react';

export const NibWordCount = forwardRef(function NibWordCount({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 6h10M3 11h6M3 16h4M15.5 10l-1.5 9M19.5 10l-1.5 9M13 13h8M12.5 16.5h8", fill: "none" })
  );
});

export default NibWordCount;
