import { createElement as h, forwardRef } from 'react';

export const NibDrill = forwardRef(function NibDrill({ size = 24, color = 'currentColor', strokeWidth = 1.5, ...props }, ref) {
  return h(
    'svg',
    { ref, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size, fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', ...props },
    h('path', { d: "M3 5h12v6H3zM15 7h3M18 8h4M7 11l-1 5h4l1-5M5 16h7v5H5z", fill: "none" })
  );
});

export default NibDrill;
