import { createElement as h, forwardRef } from 'react';

export const NibWrench = forwardRef(function NibWrench({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M15 3a5 5 0 0 0-4.6 7L3 17.4a2 2 0 0 0 3 3l7.4-7.4A5 5 0 0 0 20.5 8l-3 3-3-1-1-3 3-3A5 5 0 0 0 15 3z", fill: "none" })
  );
});

export default NibWrench;
