import { createElement as h, forwardRef } from 'react';

export const NibDictionary = forwardRef(function NibDictionary({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M4 19V5a2 2 0 0 1 2-2h14v14H6a2 2 0 0 0 0 4h14M9.5 13l2.5-6.5 2.5 6.5M10.3 11h3.4", fill: "none" })
  );
});

export default NibDictionary;
